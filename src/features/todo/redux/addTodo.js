import {
  TODO_ADD_TODO,
} from './constants';

export function addTodo() {
  return {
    type: TODO_ADD_TODO,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case TODO_ADD_TODO:
      return {
        ...state,
      };

    default:
      return state;
  }
}
