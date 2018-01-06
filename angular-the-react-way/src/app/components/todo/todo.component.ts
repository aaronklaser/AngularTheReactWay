import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo

  completed = false

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log(this.completed)
    this.completed = !this.completed
  }
}
