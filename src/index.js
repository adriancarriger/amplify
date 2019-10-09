import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import config from './aws-exports';

updateConfig(config);

Amplify.configure(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

function updateConfig(config) {
  const redirectUrl =
    process.env.NODE_ENV === 'development'
      ? 'https://localhost:3000/'
      : `${config.aws_content_delivery_url}/`;

  config.oauth.redirectSignIn = redirectUrl;
  config.oauth.redirectSignOut = redirectUrl;
}
