import { expect } from 'chai';

import {
  TODO_CLEAR_COMPLETED,
} from 'src/features/todo/redux/constants';

import {
  clearCompleted,
  reducer,
} from 'src/features/todo/redux/clearCompleted';

describe('todo/redux/clearCompleted', () => {
  it('returns correct action by clearCompleted', () => {
    expect(clearCompleted()).to.have.property('type', TODO_CLEAR_COMPLETED);
  });

  it('handles action type TODO_CLEAR_COMPLETED correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: TODO_CLEAR_COMPLETED }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
