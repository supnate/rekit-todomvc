import { expect } from 'chai';

import { TODO_COMPLETE_ALL } from 'src/features/todo/redux/constants';

import { completeAll, reducer } from 'src/features/todo/redux/completeAll';

describe('todo/redux/completeAll', () => {
  it('returns correct action by completeAll', () => {
    expect(completeAll()).to.deep.equal({ type: TODO_COMPLETE_ALL });
  });

  it('handles action type TODO_COMPLETE_ALL correctly', () => {
    const prevState = {
      todos: [
        {
          text: 'Run the tests',
          completed: true,
          id: 1,
        },
        {
          text: 'Use Rekit',
          completed: false,
          id: 0,
        },
      ],
    };
    const state = reducer(prevState, { type: TODO_COMPLETE_ALL });
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.todos).to.deep.equal([
      {
        text: 'Run the tests',
        completed: true,
        id: 1,
      },
      {
        text: 'Use Rekit',
        completed: true,
        id: 0,
      },
    ]);
  });
});
