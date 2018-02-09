import React, { Component } from 'react';

export default class Item extends Component {
  static propTypes = {};

  render() {
    return (
      <li className="todo-item">
        <input type="checkbox" />
        <label>Learn Rekit!</label>
        <button className="btn-complete">X</button>
      </li>
    );
  }
}
