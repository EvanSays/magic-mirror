import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const history = createHistory();
const middleWare = [routerMiddleware(history), thunk];
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer,
  devTools,
  applyMiddleware(...middleWare)
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('main')
);
