import { Component, OnInit } from '@angular/core';
import { ROUTE_TRANSITION } from '../../app.animation';

@Component({
  selector: 'elastic-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class DashboardComponent implements OnInit {

  width = {
    single: (100) + '%',
    double: (100 / 2) + '%',
    triple: (100 / 3) + '%',
  };

  constructor() { }

  ngOnInit() {
  }

}
