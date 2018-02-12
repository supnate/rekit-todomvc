import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTodo, editTodo, deleteTodo, completeTodo, clearCompleted, completeAll } from './redux/actions';
import { Header, TodoItem, Footer } from './';

const TODO_FILTERS = {
  all: () => true,
  active: todo => !todo.completed,
  completed: todo => todo.completed,
};

export class App extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  };

  render() {
    const { todos } = this.props.todo;
    const { addTodo, editTodo, deleteTodo, completeTodo, clearCompleted, completeAll } = this.props.actions;
    const completedCount = todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0);
    const activeCount = todos.length - completedCount;

    const filter = this.props.match.params.filter || 'all';
    console.log('filter', filter);
    const filteredTodos = todos.filter(TODO_FILTERS[filter]);

    return (
      <div className="todo-app">
        <Header addTodo={this.props.actions.addTodo} />
        <section className="main">
          {todos.length > 0 && (
            <span>
              <input className="toggle-all" type="checkbox" checked={completedCount === todos.length} />
              <label onClick={completeAll} />
            </span>
          )}
          <ul className="todo-list">
            {filteredTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
                completeTodo={completeTodo}
              />
            ))}
          </ul>
        </section>
        <Footer
          activeCount={activeCount}
          completedCount={completedCount}
          filter={filter}
          clearCompleted={clearCompleted}
        />
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
    actions: bindActionCreators({ addTodo, editTodo, deleteTodo, completeTodo, clearCompleted, completeAll }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
