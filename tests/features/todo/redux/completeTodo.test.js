import { expect } from 'chai';

import { TODO_COMPLETE_TODO } from 'src/features/todo/redux/constants';

import { completeTodo, reducer } from 'src/features/todo/redux/completeTodo';

describe('todo/redux/completeTodo', () => {
  it('returns correct action by completeTodo', () => {
    expect(completeTodo(1)).to.deep.equal({
      type: TODO_COMPLETE_TODO,
      id: 1,
    });
  });

  it('handles action type TODO_COMPLETE_TODO correctly', () => {
    const prevState = {
      todos: [
        {
          text: 'Run the tests',
          completed: false,
          id: 1,
        },
        {
          text: 'Use Rekit',
          completed: false,
          id: 0,
        },
      ],
    };
    const state = reducer(prevState, { type: TODO_COMPLETE_TODO, id: 1 });
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.todos).to.deep.equal([
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
    ]);
  });
});
