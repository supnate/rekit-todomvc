import { TODO_DELETE_TODO } from './constants';

export function deleteTodo(id) {
  return {
    type: TODO_DELETE_TODO,
    id,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case TODO_DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id),
      };

    default:
      return state;
  }
}
