import {Component, OnDestroy, OnInit} from '@angular/core';
import {SidenavItem} from '../sidenav/sidenav-item/sidenav-item.model';
import * as fromRoot from '../../reducers/index';
import * as fromSidenav from '../sidenav/shared/sidenav.action';
import {SetCurrentlyOpenByRouteAction} from '../sidenav/shared/sidenav.action';
import {Store} from '@ngrx/store';
import {ActivatedRoute, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {SelectLayoutAction, SetCardElevationAction} from '../layout/shared/layout.action';
import {Subscription} from 'rxjs';
import {LoaderBarService} from '../loader-bar/loader-bar.service';

@Component({
  selector: 'route-handler',
  template: `
    <app-loader-bar></app-loader-bar>
    <router-outlet></router-outlet>
  `
})
export class RouteHandlerComponent implements OnInit, OnDestroy {

  private subscriptionRouter: Subscription;

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,
    private route: ActivatedRoute,
    private loaderBar: LoaderBarService) {

    this.subscriptionRouter = this.router.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          this.loaderBar.show();
        } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
          this.loaderBar.hide();
        }
      },
      () => {
        this.loaderBar.hide();
      }
    );
  }

  ngOnDestroy() {
    this.subscriptionRouter?.unsubscribe();
  }

  ngOnInit() {
    // Set Sidenav Currently Open on Page load
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.store.dispatch(new SetCurrentlyOpenByRouteAction(event.urlAfterRedirects));
      }
    });

    // You can use ?layout=beta to load the page with Layout Beta as default
    // Same with ?elevation=5 (anything from 0 to 24)
    this.route.queryParamMap.subscribe((params) => {
      const layout = params.get('layout');

      switch (layout) {
        case 'alpha': {
          this.store.dispatch(new SelectLayoutAction('alpha'));
          break;
        }

        case 'beta': {
          this.store.dispatch(new SelectLayoutAction('beta'));
          break;
        }

        case 'gamma': {
          this.store.dispatch(new SelectLayoutAction('gamma'));
          break;
        }
      }

      const elevation = params.get('elevation');

      if (elevation) {
        this.store.dispatch(new SetCardElevationAction('card-elevation-z' + elevation));
      }
    });

    // Define Menu Items here
    // Top Level Item (The item to click on so the dropdown opens)
    const hospital = new SidenavItem({
      name: 'Hospitals',
      route: '/hospital',
      icon: 'local_hospital',
      subItems: [],
      position: 1
    });

    const doctor = new SidenavItem({
      name: 'Doctors',
      route: '/doctor',
      icon: 'supervisor_account',
      subItems: [],
      position: 1
    });

    const patient = new SidenavItem({
      name: 'Patients',
      route: '/patient',
      icon: 'person',
      subItems: [],
      position: 1
    });

    const specialty = new SidenavItem({
      name: 'Specialties',
      route: '/specialty',
      icon: 'folder',
      subItems: [],
      position: 1
    });

    const note = new SidenavItem({
      name: 'Notes',
      route: '/note',
      icon: 'library_books',
      subItems: [],
      position: 1
    });

    this.store.dispatch(new fromSidenav.AddSidenavItemAction(hospital));
    this.store.dispatch(new fromSidenav.AddSidenavItemAction(doctor));
    this.store.dispatch(new fromSidenav.AddSidenavItemAction(patient));
    this.store.dispatch(new fromSidenav.AddSidenavItemAction(specialty));
    this.store.dispatch(new fromSidenav.AddSidenavItemAction(note));
  }

}
