import { StoreModule, Store, ActionReducerMap } from '@ngrx/store'
import { TodoActions, TodoReducer, TodoState, INITIAL_TODO_STATE } from './todo.store';

export interface State {
  todo: TodoState
}

export const INITIAL_STATE: State = {
  todo: INITIAL_TODO_STATE
}

export function getInitialState() {
  return INITIAL_STATE
}

export {
  TodoActions
}

export const reducers = {
  todo: TodoReducer
};
export { StoreModule, Store } from '@ngrx/store'
