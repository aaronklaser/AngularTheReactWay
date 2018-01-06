import { Component, OnChanges, Input } from '@angular/core';
import { TodoActions } from './../../../store'

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnChanges {

  @Input() active
  @Input() filter
  @Input() todoActions

  constructor(
  ) { }

  ngOnChanges(changes) {
    console.log(changes)
    this.active = changes.active.currentValue
  }

  onClick() {
    this.todoActions.setVisibilityFilter(this.filter)
  }
}
