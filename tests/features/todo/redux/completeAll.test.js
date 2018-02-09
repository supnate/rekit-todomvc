import { expect } from 'chai';

import {
  TODO_COMPLETE_ALL,
} from 'src/features/todo/redux/constants';

import {
  completeAll,
  reducer,
} from 'src/features/todo/redux/completeAll';

describe('todo/redux/completeAll', () => {
  it('returns correct action by completeAll', () => {
    expect(completeAll()).to.have.property('type', TODO_COMPLETE_ALL);
  });

  it('handles action type TODO_COMPLETE_ALL correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: TODO_COMPLETE_ALL }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
