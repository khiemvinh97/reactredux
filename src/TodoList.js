import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {addTodo,deleteTodo,clearTodo,completeTodo} from './action/index';
import todoApp from './reducer/todoApp.js';
import store from './store'


class TodoItem extends React.Component {
  constructor(){
    super()
  }
  onDeleteClick() {
    store.dispatch(deleteTodo(this.props.index));
  }

  onCompletedClick() {
    store.dispatch(completeTodo(this.props.index));
  }

  render() {
    return (
      <li>
        <a href="#" onClick={this.onCompletedClick.bind(this)} style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}>{this.props.message.trim()}</a>
        <a href="#" onClick={this.onDeleteClick.bind(this)} style={{textDecoration: 'none'}}>[x]</a>
      </li>
    );
  }
}

class TodoList extends React.Component {
  constructor(){
    super();
    this.state = {
      items: []
    };
  } 
  componentWillMount() {
    store.subscribe(() => {
      var state = store.getState();
      this.setState({
        items: state.todo.items
      });
    });
  }

  render() {
    var items = [];
    this.state.items.forEach((item, index) => {
      items.push(<TodoItem
        key={index}
        index={index}
        message={item.message}
        completed={item.completed}
      />);
    });

    if (!items.length) {
      return (
        <p>
          <i>Please add something to do.</i>
        </p>
      );
    }
    return (
      <ol>{ items }</ol>
    );
  }
}

export default TodoList