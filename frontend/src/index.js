import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import BeachReducer from './reducers/BeachReducer';
import SessionsReducer from './reducers/SessionsReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers(
  {beach: BeachReducer, session: SessionsReducer}
)


let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
  
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  
  document.getElementById('root') 
);

