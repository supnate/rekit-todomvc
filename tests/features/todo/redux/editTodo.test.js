import { expect } from 'chai';

import { TODO_EDIT_TODO } from 'src/features/todo/redux/constants';

import { editTodo, reducer } from 'src/features/todo/redux/editTodo';

describe('todo/redux/editTodo', () => {
  it('returns correct action by editTodo', () => {
    expect(editTodo(1, 'Use Rekit Studio now!')).to.deep.equal({
      type: TODO_EDIT_TODO,
      id: 1,
      text: 'Use Rekit Studio now!',
    });
  });

  it('handles action type TODO_EDIT_TODO correctly', () => {
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
    const state = reducer(prevState, {
      type: TODO_EDIT_TODO,
      text: 'Fix the tests',
      id: 1,
    });
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.todos).to.deep.equal([
      {
        text: 'Fix the tests',
        completed: false,
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
