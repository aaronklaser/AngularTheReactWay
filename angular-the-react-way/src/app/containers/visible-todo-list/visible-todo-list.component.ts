import { Component, OnInit } from '@angular/core';
import { State, Store } from '../../../store'
@Component({
  selector: 'app-visible-todo-list',
  templateUrl: './visible-todo-list.component.html',
  styleUrls: ['./visible-todo-list.component.sass']
})
export class VisibleTodoListComponent implements OnInit {

  public todos

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.store.select('todo', 'todos').subscribe(this.setTodoList)
  }

  setTodoList = data => this.todos = data

}
