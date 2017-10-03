import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './components/routes';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// router
import { BrowserRouter } from 'react-router-dom';

// import semantic-ui styling
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
