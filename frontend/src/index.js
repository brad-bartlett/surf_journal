import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import BeachReducer from './reducers/BeachReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



let store = createStore(BeachReducer, composeEnhancers(applyMiddleware(thunk)))
  
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  
  document.getElementById('root') 
);

