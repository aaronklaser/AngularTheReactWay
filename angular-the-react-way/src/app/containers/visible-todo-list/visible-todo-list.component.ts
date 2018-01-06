import { Component, OnInit } from '@angular/core';
import { TodoActions, State, Store } from '../../../store'
@Component({
  selector: 'app-visible-todo-list',
  templateUrl: './visible-todo-list.component.html',
  styleUrls: ['./visible-todo-list.component.scss']
})
export class VisibleTodoListComponent implements OnInit {

  public todos

  constructor(
    private store: Store<State>,
    private todoActions: TodoActions
  ) { }

  ngOnInit() {
    this.store.select('todo', 'todos').subscribe(this.setTodoList)
  }

  setTodoList = (data) => {
    this.store.select('todo', 'visibilityFilter').subscribe(this.filterTodos(data))
  }

  filterTodos = data => filter => this.todos = this.getVisibleTodos(data, filter) // Currying is awesome!

  getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
      case 'SHOW_ALL':
      default:
        return todos
    }
  }

}
