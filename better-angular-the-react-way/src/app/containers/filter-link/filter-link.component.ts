import { Component, OnInit, Input } from '@angular/core';
import { TodoActions, State, Store } from './../../../store'

@Component({
  selector: 'app-filter-link',
  templateUrl: './filter-link.component.html',
  styleUrls: ['./filter-link.component.scss']
})
export class FilterLinkComponent implements OnInit {

  active
  @Input() filter

  constructor(
    private store: Store<State>,
    private todoActions: TodoActions
  ) { }

  ngOnInit() {
    this.store.select('todo', 'visibilityFilter').subscribe(this.isActive)
  }

  isActive = selectedFilter => this.active = this.filter === selectedFilter
}
