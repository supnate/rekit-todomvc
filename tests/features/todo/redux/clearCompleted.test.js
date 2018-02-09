import { expect } from 'chai';

import { TODO_CLEAR_COMPLETED } from 'src/features/todo/redux/constants';

import { clearCompleted, reducer } from 'src/features/todo/redux/clearCompleted';

describe('todo/redux/clearCompleted', () => {
  it('returns correct action by clearCompleted', () => {
    expect(clearCompleted()).to.deep.equal({
      type: TODO_CLEAR_COMPLETED,
    });
  });

  it('handles action type TODO_CLEAR_COMPLETED correctly', () => {
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
    const state = reducer(prevState, { type: TODO_CLEAR_COMPLETED });
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.todos).to.deep.equal([
      {
        text: 'Use Rekit',
        completed: false,
        id: 0,
      },
    ]);
  });
});
