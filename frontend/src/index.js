import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


  ReactDOM.render(
  
    <App />,
  
  document.getElementById('root')
);

