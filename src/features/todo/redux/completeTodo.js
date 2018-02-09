import {
  TODO_COMPLETE_TODO,
} from './constants';

export function completeTodo() {
  return {
    type: TODO_COMPLETE_TODO,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case TODO_COMPLETE_TODO:
      return {
        ...state,
      };

    default:
      return state;
  }
}
