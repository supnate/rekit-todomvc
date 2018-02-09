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
    expect(addTodo()).to.have.property('type', TODO_ADD_TODO);
  });

  it('handles action type TODO_ADD_TODO correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: TODO_ADD_TODO }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
