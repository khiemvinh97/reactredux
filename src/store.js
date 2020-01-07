import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import todoApp from './reducer/todoApp.js';

var defaultState = {
  todo: {
    items: []
  }
};
var store = createStore(todoApp, defaultState);

export  default store;