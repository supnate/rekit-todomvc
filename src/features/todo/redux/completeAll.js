import {
  TODO_COMPLETE_ALL,
} from './constants';

export function completeAll() {
  return {
    type: TODO_COMPLETE_ALL,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case TODO_COMPLETE_ALL:
      return {
        ...state,
      };

    default:
      return state;
  }
}
