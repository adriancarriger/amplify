import React, { useEffect, useState } from 'react';
import { Auth, Hub, API, graphqlOperation } from 'aws-amplify';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import * as subscriptions from './graphql/subscriptions';
import { listContacts } from './graphql/queries';
import './App.css';
import Home from './pages/Home';
import { Contacts } from './pages/Contacts/index';
import NavBar from './components/NavBar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1
  }
}));

const state = {};
const sub = (query, next) => API.graphql(graphqlOperation(query)).subscribe({ next });

function App() {
  const [contacts, setContacts] = useState([]);
  state.contacts = contacts; // this is weird

  const [auth, setAuth] = useState(false);

  useEffect(() => {
    Hub.listen('auth', ({ payload }) => {
      if (payload.event === 'signIn') {
        updateAuth(setAuth, setContacts);
      }
      if (payload.event === 'signOut') {
        setAuth(undefined);
      }
    });

    updateAuth(setAuth, setContacts);
  }, []);

  const classes = useStyles();

  const [modalOpen, setModalOpen] = React.useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <NavBar auth={auth} onModalOpen={handleOpen} />

        <main className={classes.content}>
          <div className={classes.toolbar} />

          <div>
            <Route path="/" exact>
              <Redirect to="/contacts/" />
            </Route>
            {auth ? (
              <Route
                path="/contacts/"
                render={props => (
                  <Contacts
                    {...props}
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                    contacts={contacts}
                    contactMutations={createStateMutations(setContacts)}
                  />
                )}
              />
            ) : (
              <Home />
            )}
          </div>
        </main>
      </div>
    </Router>
  );
}

async function listContactsQuery() {
  const { data } = await API.graphql(graphqlOperation(listContacts, { limit: 999 }));

  return data.listContacts.items;
}

async function updateAuth(setAuth, setContacts) {
  try {
    const { attributes } = await Auth.currentAuthenticatedUser();

    setAuth({ email: attributes.email });

    (async () => {
      setContacts(await listContactsQuery());
    })();

    const contactMutations = createStateMutations(setContacts);

    const subscribeToEvent = eventType =>
      sub(subscriptions[eventType], ({ value }) => {
        contactMutations[eventType](value.data[eventType]);
      });

    ['onCreateContact', 'onDeleteContact', 'onUpdateContact'].forEach(subscribeToEvent);
  } catch (e) {
    setAuth(undefined);
  }
}

export default App;

function createStateMutations(setContacts) {
  return {
    onCreateContact: contact => {
      if (!state.contacts.some(({ id }) => id === contact.id)) {
        setContacts([...state.contacts, contact]);
      }
    },
    onDeleteContact: contact => setContacts(state.contacts.filter(({ id }) => id !== contact.id)),
    onUpdateContact: contact =>
      setContacts(
        state.contacts.map(existingContact =>
          existingContact.id === contact.id ? contact : existingContact
        )
      )
  };
}
