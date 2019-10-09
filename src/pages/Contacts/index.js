import React, { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';

import { createContact, updateContact, deleteContact } from '../../graphql/mutations';
import { EditDialog } from './EditDialog';
import { ContactRow } from './ContactRow';

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650
  }
}));

const defaultModalState = {
  id: undefined,
  firstName: '',
  lastName: '',
  phones: []
};

export function Contacts({ modalOpen, setModalOpen, contacts, contactMutations }) {
  const [editable, setEditable] = useState(defaultModalState);

  const handleClose = () => {
    setModalOpen(false);
    setEditable(defaultModalState);
  };

  const handleEdit = contact => {
    setEditable(contact);
    setModalOpen(true);
  };

  const classes = useStyles({});

  const handleSubmit = async inputs => {
    const tempId = `temp-${contacts.length + 1}`;

    if (inputs.id) {
      contactMutations.onUpdateContact(inputs);
    } else {
      contactMutations.onCreateContact({ ...inputs, id: tempId });
    }

    const { data } = await API.graphql(
      graphqlOperation(inputs.id ? updateContact : createContact, {
        input: inputs
      })
    );

    if (!inputs.id) {
      contactMutations.onDeleteContact({ id: tempId });
      contactMutations.onCreateContact(data.createContact);
    }
  };

  const handleDelete = ({ id }) => {
    contactMutations.onDeleteContact({ id });
    API.graphql(graphqlOperation(deleteContact, { input: { id } }));
  };

  return (
    <div>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Labels</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map(contact => (
            <ContactRow
              key={contact.id}
              contact={contact}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
        </TableBody>
      </Table>

      <div>
        <EditDialog
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          onSubmit={handleSubmit}
          onClose={handleClose}
          editable={editable}
          setEditable={setEditable}
        />
      </div>
    </div>
  );
}
