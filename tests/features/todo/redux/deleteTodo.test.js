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
    expect(deleteTodo(1)).to.deep.equal({
      type: TODO_DELETE_TODO,
      id: 1,
    });
  });

  it('handles action type TODO_DELETE_TODO correctly', () => {
    const prevState = {
      todos: [
        {
          text: 'Use Rekit',
          completed: false,
          id: 0
        },
        {
          text: 'Run the tests',
          completed: false,
          id: 1
        }
      ],
    };
    const state = reducer(
      prevState,
      { type: TODO_DELETE_TODO, id: 1 }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.todos).to.deep.equal([
      {
        text: 'Use Rekit',
        completed: false,
        id: 0
      }
    ]);
  });
});
