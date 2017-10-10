import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// router
import { BrowserRouter } from 'react-router-dom';

// import semantic-ui styling
import 'semantic-ui-css/semantic.min.css';

// react-redux
import { loadCategories } from './actions/CatAction';
import { loadPosts } from './actions/PostAction';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { Provider } from 'react-redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

store.dispatch(loadCategories());
store.dispatch(loadPosts());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter><App /></BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
