import { TodoComponent } from './../app/components/todo/todo.component';
import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { TOGGLE_ACTION } from '@ngrx/store-devtools/src/actions';

// Action Types
export const ADD_TODO = '[Todo] ADD_TODO'
export const TOGGLE_TODO = '[Todo] TOGGLE_TODO'
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
    index = 0

    constructor(private store: Store<TodoState>) {}

    addTodo(todo) {
      this.store.dispatch({ type: ADD_TODO, todo, id: this.index })
      this.index++
    }

    toggleTodo(id) {
      this.store.dispatch({ type: TOGGLE_TODO, id })
    }

    setVisibilityFilter(filter) {
      this.store.dispatch({ type: SET_VISIBILITY_FILTER, filter })
    }
}

export function TodoReducer(state = INITIAL_TODO_STATE, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
              ...state,
              todos: [...state.todos, {
                id: action.id,
                text: action.todo,
                completed: false
              }]
            }
        case TOGGLE_TODO:
            return {
              ...state,
              todos: state.todos.map(todo =>
                (todo.id === action.id)
                  ? {...todo, completed: !todo.completed}
                  : todo
              )
            }


        case SET_VISIBILITY_FILTER:
            return {
              ...state,
              visibilityFilter: action.filter
            }

        default:
            return state
    }
}
