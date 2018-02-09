import { expect } from 'chai';

import {
  TODO_DELETE_TODO,
} from 'src/features/todo/redux/constants';

import {
  deleteTodo,
  reducer,
} from 'src/features/todo/redux/deleteTodo';

describe('todo/redux/deleteTodo', () => {
  it('returns correct action by deleteTodo', () => {
    expect(deleteTodo()).to.have.property('type', TODO_DELETE_TODO);
  });

  it('handles action type TODO_DELETE_TODO correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: TODO_DELETE_TODO }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
