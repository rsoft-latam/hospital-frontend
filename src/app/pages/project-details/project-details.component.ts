import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ROUTE_TRANSITION } from '../../app.animation';

@Component({
  selector: 'elastic-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class ProjectDetailsComponent implements OnInit {

  project: any;

  constructor() {
  }

  ngOnInit() {
    this.project = {
      background: 'linear-gradient(to left, #cbad6d, #d53369)',
      date: moment(),
      codename: 'Qyntax',
      name: 'Product Redesign',
      status: 'ONGOING',
      members: [
        {
          image: 'assets/img/demo/avatars/1.png',
        },
        {
          image: 'assets/img/demo/avatars/7.png',
        },
        {
          image: 'assets/img/demo/avatars/9.png',
        },
        {
          image: 'assets/img/demo/avatars/3.png',
        }
      ],
      labels: ['Redesign', 'Product', 'Illustration', 'Web Design']
    }
  }

}
