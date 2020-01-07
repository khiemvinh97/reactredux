import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {addTodo} from './action/index';
import todoApp from './reducer/todoApp.js';
import store from './store'


class AddTodoForm extends React.Component {
  constructor(){
    super();
    this.state = {
      message: ''
    };
    this.onFormSubmit=this.onFormSubmit.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();    
    store.dispatch(addTodo(this.state.message));
    this.setState({ message: '' });
    console.log(this.state.message)
  }

  onMessageChanged(e) {
    var message = e.target.value;
    this.setState({ message: message });
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" placeholder="Todo..." onChange={this.onMessageChanged.bind(this)} value={this.state.message} />
        <input type="submit" value="Add" />
      </form>
    );
}
}

export default AddTodoForm;