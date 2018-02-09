import { expect } from 'chai';

import {
  TODO_COMPLETE_TODO,
} from 'src/features/todo/redux/constants';

import {
  completeTodo,
  reducer,
} from 'src/features/todo/redux/completeTodo';

describe('todo/redux/completeTodo', () => {
  it('returns correct action by completeTodo', () => {
    expect(completeTodo()).to.have.property('type', TODO_COMPLETE_TODO);
  });

  it('handles action type TODO_COMPLETE_TODO correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: TODO_COMPLETE_TODO }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
