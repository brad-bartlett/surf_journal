import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import SessionReducer from './reducers/SessionReducer';
import BeachReducer from './reducers/BeachReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = compose(BeachReducer, SessionReducer);

let store = createStore(enhancer, composeEnhancers(applyMiddleware(thunk)))
  
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  
  document.getElementById('root')
);

