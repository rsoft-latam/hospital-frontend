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
    const amazon = new SidenavItem({
      name: 'Hospital',
      route: '/hospital',
      icon: 'wb_cloudy',
      subItems: [],
      position: 1
    });

    const coreData = new SidenavItem({
      name: 'Doctor',
      route: '/doctor',
      icon: 'assessment',
      subItems: [],
      position: 1
    });

    const repricer = new SidenavItem({
      name: 'Patient',
      route: '/patient',
      icon: 'access_time',
      subItems: [],
      position: 1
    });

    const crawler = new SidenavItem({
      name: 'Specialty',
      route: '/specialty',
      icon: 'attach_file',
      subItems: [],
      position: 1
    });

    this.store.dispatch(new fromSidenav.AddSidenavItemAction(amazon));
    this.store.dispatch(new fromSidenav.AddSidenavItemAction(coreData));
    this.store.dispatch(new fromSidenav.AddSidenavItemAction(repricer));
    this.store.dispatch(new fromSidenav.AddSidenavItemAction(crawler));
  }

}
