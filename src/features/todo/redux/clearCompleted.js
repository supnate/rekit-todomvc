import { TODO_CLEAR_COMPLETED } from './constants';

export function clearCompleted() {
  return {
    type: TODO_CLEAR_COMPLETED,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case TODO_CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.completed === false),
      };

    default:
      return state;
  }
}
