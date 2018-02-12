import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  static propTypes = {
    completedCount: PropTypes.number.isRequired,
    activeCount: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    clearCompleted: PropTypes.func.isRequired,
  };

  render() {
    const { activeCount, completedCount, filter } = this.props;
    const itemWord = activeCount === 1 ? 'item' : 'items';
    return (
      <footer className="todo-footer footer">
        <span className="todo-count">
          <strong>{activeCount || 'No'}</strong> {itemWord} left
        </span>
        <ul className="filters">
          {['All', 'Active', 'Completed'].map(f => (
            <li key={f}>
              <Link to={`/todo/${f.toLowerCase()}`} className={(filter || 'all') === f.toLowerCase() ? 'selected' : ''}>
                {f}
              </Link>
            </li>
          ))}
        </ul>
        {completedCount > 0 && (
          <button className="clear-completed" onClick={this.props.clearCompleted}>
            Clear completed
          </button>
        )}
      </footer>
    );
  }
}
