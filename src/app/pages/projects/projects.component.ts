import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ROUTE_TRANSITION } from '../../app.animation';

@Component({
  selector: 'elastic-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class ProjectsComponent implements OnInit {

  desktopGap = '24px';
  mobileGap = '16px';

  desktopWidth = `0 0 calc(33.3333% - ${this.desktopGap}`;
  tabletWidth = `0 0 calc(33.3333% - ${this.desktopGap}`;
  smallTabletWidth = `0 0 calc(50% - ${this.mobileGap}`;
  mobileWidth = `0 0 calc(100% - ${this.mobileGap}`;

  projects: any[] = [ ];
  filteredProjects: any[] = [ ];

  filter = 'ALL';

  constructor() { }

  filterProjectsBy(selectEvent) {
    if (selectEvent.value === 'ALL') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter((project) => {
        return selectEvent.value === project.status;
      });
    }

  }

  ngOnInit() {
    this.projects.push(
      {
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
        ]
      },
      {
        background: 'linear-gradient(to left, #4cb8c4, #3cd3ad)',
        date: moment().subtract(2, 'day'),
        codename: 'Luxes',
        name: 'New Product Ads',
        status: 'ONGOING',
        members: [
          {
            image: 'assets/img/demo/avatars/12.png',
          },
          {
            image: 'assets/img/demo/avatars/4.png',
          },
          {
            image: 'assets/img/demo/avatars/2.png',
          },
          {
            image: 'assets/img/demo/avatars/4.png',
          },
          {
            image: 'assets/img/demo/avatars/1.png',
          }
        ]
      },
      {
        background: 'linear-gradient(to left, #f857a6, #ff5858)',
        date: moment().subtract(3, 'day'),
        codename: 'Zixot',
        name: 'Website Redesign',
        status: 'ONGOING',
        members: [
          {
            image: 'assets/img/demo/avatars/8.png',
          },
          {
            image: 'assets/img/demo/avatars/15.png',
          },
          {
            image: 'assets/img/demo/avatars/3.png',
          }
        ]
      },
      {
        background: 'linear-gradient(to left, #24c6dc, #514a9d)',
        date: moment().subtract(5, 'day'),
        codename: 'Adiga',
        name: 'Android App',
        status: 'ONGOING',
        members: [
          {
            image: 'assets/img/demo/avatars/3.png',
          },
          {
            image: 'assets/img/demo/avatars/8.png',
          },
          {
            image: 'assets/img/demo/avatars/2.png',
          }
        ]
      },
      {
        background: 'linear-gradient(to left, #1fa2ff, #12d8fa, #a6ffcb)',
        date: moment().subtract(5, 'day'),
        codename: 'Oxida',
        name: 'Logo Concept',
        status: 'FINISHED',
        members: [
          {
            image: 'assets/img/demo/avatars/11.png',
          },
          {
            image: 'assets/img/demo/avatars/5.png',
          },
          {
            image: 'assets/img/demo/avatars/2.png',
          },
          {
            image: 'assets/img/demo/avatars/3.png',
          },
          {
            image: 'assets/img/demo/avatars/14.png',
          }
        ]
      },
      {
        background: 'linear-gradient(to left, #1cd8d2, #93edc7)',
        date: moment().subtract(9, 'day'),
        codename: 'Jizex',
        name: 'iOS App',
        status: 'FINISHED',
        members: [
          {
            image: 'assets/img/demo/avatars/9.png',
          },
          {
            image: 'assets/img/demo/avatars/2.png',
          }
        ]
      },
      {
        background: 'linear-gradient(to left, #cc95c0, #dbd4b4)',
        date: moment().subtract('12', 'day'),
        codename: 'Puzidax',
        name: 'Secret project',
        status: 'FINISHED',
        members: [
          {
            image: 'assets/img/demo/avatars/12.png',
          },
          {
            image: 'assets/img/demo/avatars/1.png',
          },
          {
            image: 'assets/img/demo/avatars/4.png',
          }
        ]
      },
      {
        background: 'linear-gradient(to left, #1d976c, #93f9b9)',
        date: moment().subtract(20, 'day'),
        codename: 'Zodiz',
        name: 'Mobile Website',
        status: 'DRAFT',
        members: [
          {
            image: 'assets/img/demo/avatars/9.png',
          },
          {
            image: 'assets/img/demo/avatars/1.png',
          },
        ]
      },
      {
        background: 'linear-gradient(to left, #dd5e89, #f7bb97)',
        date: moment().subtract(23, 'day'),
        codename: 'Widiz',
        name: 'Improve Marketing',
        status: 'DRAFT',
        members: [
          {
            image: 'assets/img/demo/avatars/8.png',
          },
          {
            image: 'assets/img/demo/avatars/7.png',
          },
          {
            image: 'assets/img/demo/avatars/5.png',
          },
          {
            image: 'assets/img/demo/avatars/13.png',
          },
        ]
      }
    );

    this.filteredProjects = this.projects;
  }

}
