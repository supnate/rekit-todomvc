import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  static propTypes = {
    completedCount: PropTypes.number.isRequired,
    activeCount: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    onShow: PropTypes.func.isRequired,
  };

  render() {
    const { activeCount } = this.props;
    const itemWord = activeCount === 1 ? 'item' : 'items'
    return (
      <footer className="todo-footer">
        <span className="todo-count">
          <strong>{activeCount || 'No'}</strong> {itemWord} left
        </span>
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
        <button className="clear-completed" onClick={this.props.clearCompleted}>Clear completed</button>
      </footer>
    );
  }
}
