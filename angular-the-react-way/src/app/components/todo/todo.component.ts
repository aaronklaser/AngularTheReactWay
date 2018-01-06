import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnChanges {

  completed
  @Input() todo
  @Input() todoActions

  constructor() { }

  ngOnChanges(changes) {
    console.log(changes)
    this.completed = changes.todo.currentValue.completed
  }

  onClick() {
    console.log(this.completed)
    this.todoActions.toggleTodo(this.todo.id)
  }
}
