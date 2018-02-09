import {
  TODO_DELETE_TODO,
} from './constants';

export function deleteTodo() {
  return {
    type: TODO_DELETE_TODO,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case TODO_DELETE_TODO:
      return {
        ...state,
      };

    default:
      return state;
  }
}
