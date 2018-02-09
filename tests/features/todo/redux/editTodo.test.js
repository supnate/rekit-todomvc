import { expect } from 'chai';

import {
  TODO_EDIT_TODO,
} from 'src/features/todo/redux/constants';

import {
  editTodo,
  reducer,
} from 'src/features/todo/redux/editTodo';

describe('todo/redux/editTodo', () => {
  it('returns correct action by editTodo', () => {
    expect(editTodo()).to.have.property('type', TODO_EDIT_TODO);
  });

  it('handles action type TODO_EDIT_TODO correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: TODO_EDIT_TODO }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
