import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Header, TodoItem, Footer } from './';

export class App extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { todos } = this.props.todo;
    const { editTodo, deleteTodo, completeTodo } = this.props.actions;
    const completedCount = todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0);
    const activeCount = todos.length - completedCount;
    return (
      <div className="todo-app">
        <Header addTodo={this.props.actions.addTodo} />
        <section>
          <ul>
            {todos.map(todo => (
              <TodoItem key={todo.id} todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
            ))}
          </ul>
        </section>
        <Footer activeCount={activeCount} />
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    todo: state.todo,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
