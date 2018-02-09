import { TODO_COMPLETE_ALL } from './constants';

export function completeAll() {
  return {
    type: TODO_COMPLETE_ALL,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case TODO_COMPLETE_ALL:
      const areAllMarked = state.todos.every(todo => todo.completed);
      return {
        ...state,
        todos: state.todos.map(todo => ({
          ...todo,
          completed: !areAllMarked,
        })),
      };

    default:
      return state;
  }
}
