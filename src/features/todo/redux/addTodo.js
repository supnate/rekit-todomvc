import { TODO_ADD_TODO } from './constants';

export function addTodo(text) {
  return {
    type: TODO_ADD_TODO,
    text,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case TODO_ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
            completed: false,
            text: action.text,
          },
        ],
      };

    default:
      return state;
  }
}
