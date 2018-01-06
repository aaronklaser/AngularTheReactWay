import { Component, OnInit } from '@angular/core';
import { TodoActions } from '../../../store'
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  constructor(
    private todoActions: TodoActions
  ) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log('HELLO')
  }
  addTodo(todo) {
    this.todoActions.addTodo(todo)
  }
}
