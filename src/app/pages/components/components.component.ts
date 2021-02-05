import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ROUTE_TRANSITION } from '../../app.animation';

@Component({
  selector: 'elastic-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class ComponentsComponent implements OnInit, AfterContentInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
  };

  scrollTo(elem) {
    elem.scrollIntoView({
      behavior: 'smooth', // or "auto" or "instant"
      block: 'start', // or "end"
      inline: 'nearest'
    });
  }
}
