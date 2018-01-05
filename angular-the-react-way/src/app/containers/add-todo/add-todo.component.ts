import { Component, OnInit } from '@angular/core';
import { TodoActions } from '../../../store'
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.sass']
})
export class AddTodoComponent implements OnInit {

  constructor(
    private todoActions: TodoActions
  ) { }

  ngOnInit() {
  }

  addTodo(todo) {
    this.todoActions.addTodo({ title: todo })
  }
}
