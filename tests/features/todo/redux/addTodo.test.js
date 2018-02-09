import { expect } from 'chai';

import {
  TODO_ADD_TODO,
} from 'src/features/todo/redux/constants';

import {
  addTodo,
  reducer,
} from 'src/features/todo/redux/addTodo';

describe('todo/redux/addTodo', () => {
  it('returns correct action by addTodo', () => {
    expect(addTodo('Use Rekit')).to.deep.equal({
      type: TODO_ADD_TODO,
      text: 'Use Rekit',
    });
  });

  it('handles action type TODO_ADD_TODO correctly', () => {
    const prevState = { todos: [] };
    const state = reducer(
      prevState,
      { type: TODO_ADD_TODO, text: 'Run the tests' }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.todos).to.deep.equal([{
      text: 'Run the tests',
      completed: false,
      id: 0,
    }]);
  });
});
