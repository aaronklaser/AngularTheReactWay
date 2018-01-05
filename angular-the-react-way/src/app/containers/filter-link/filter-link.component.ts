import { TodoActions } from './../../../store';
import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-filter-link',
  templateUrl: './filter-link.component.html',
  styleUrls: ['./filter-link.component.sass']
})
export class FilterLinkComponent implements OnChanges {

  _filter

  @Input() filter

  constructor(
    private todoActions: TodoActions
  ) { }

  ngOnChanges(changes) {
    console.log('changes', changes)
    this._filter = changes.filter.currentValue
  }


  onClick(filter) {
    console.log(this.todoActions)

    this.todoActions.setVisibilityFilter(filter)
  }

}
