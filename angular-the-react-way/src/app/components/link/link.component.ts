import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.sass']
})
export class LinkComponent implements OnInit {

  @Input() onClick
  @Input() filter
  @Input() active

  constructor() { }

  ngOnInit() {
  }

  clickLink(filter) {
    console.log('clickLink', filter)
    this.onClick(filter)
  }
}
