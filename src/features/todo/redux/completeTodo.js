import { TODO_COMPLETE_TODO } from './constants';

export function completeTodo(id) {
  return {
    type: TODO_COMPLETE_TODO,
    id,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case TODO_COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo)),
      };

    default:
      return state;
  }
}
