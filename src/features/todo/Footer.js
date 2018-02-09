import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  static propTypes = {};

  render() {
    return (
      <footer className="todo-footer">
        <span>5 items left</span>
        <ul>
          <li>
            <Link to="/todo">All</Link>
          </li>
          <li>
            <Link to="/todo/active">Active</Link>
          </li>
          <li>
            <Link to="/todo/completed">Completed</Link>
          </li>
        </ul>
        <button>Clear completed</button>
      </footer>
    );
  }
}
