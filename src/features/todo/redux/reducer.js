import initialState from './initialState';
import { reducer as addTodoReducer } from './addTodo';
import { reducer as completeTodoReducer } from './completeTodo';
import { reducer as deleteTodoReducer } from './deleteTodo';
import { reducer as clearCompletedReducer } from './clearCompleted';
import { reducer as completeAllReducer } from './completeAll';
import { reducer as editTodoReducer } from './editTodo';

const reducers = [
  addTodoReducer,
  completeTodoReducer,
  deleteTodoReducer,
  clearCompletedReducer,
  completeAllReducer,
  editTodoReducer,
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
