import { TodoComponent } from './../app/components/todo/todo.component';
import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

// Action Types
export const ADD_TODO = '[Todo] ADD_TODO'
export const SET_VISIBILITY_FILTER = '[Todo] SET_VISIBILITY_FILTER'

// State
export interface TodoState {
  todos: any[],
  visibilityFilter: any
}
export const INITIAL_TODO_STATE = {
  todos: [],
  visibilityFilter: 'SHOW_ALL'
}

// Action Helpers
@Injectable()
export class TodoActions {
    constructor(private store: Store<TodoState>) {}

    addTodo(todo) {
        this.store.dispatch({ type: ADD_TODO, payload: todo })
    }

    setVisibilityFilter(filter) {
      this.store.dispatch({ type: SET_VISIBILITY_FILTER, payload: filter })
    }
}

export function TodoReducer(state = INITIAL_TODO_STATE, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
              ...state,
              todos: [...state.todos, ...action.payload]
            }

        case SET_VISIBILITY_FILTER:
            return {
              ...state,
              visibilityFilter: action.payload
            }

        default:
            return state
    }
}
