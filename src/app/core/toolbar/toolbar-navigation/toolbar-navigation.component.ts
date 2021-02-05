import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers/index';
import { SidenavItem } from '../../sidenav/sidenav-item/sidenav-item.model';
import { SetCurrentlyOpenByRouteAction } from '../../sidenav/shared/sidenav.action';

@Component({
  selector: 'elastic-toolbar-navigation',
  templateUrl: './toolbar-navigation.component.html',
  styleUrls: ['./toolbar-navigation.component.scss']
})
export class ToolbarNavigationComponent implements OnInit, OnDestroy {

  sidenavItems$: Observable<SidenavItem[]>;
  currentlyOpen$: Observable<SidenavItem[]>;
  showMoreButtonAfterIndex = 8;

  private _routerEventsSubscription: Subscription;

  constructor(
    private router: Router,
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.sidenavItems$ = this.store.select(fromRoot.getSidenavItems);
    this.currentlyOpen$ = this.store.select(fromRoot.getSidenavCurrentlyOpen);

    this._routerEventsSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.store.dispatch(new SetCurrentlyOpenByRouteAction(event.urlAfterRedirects));
      }
    });
  }

  ngOnDestroy() {
    this._routerEventsSubscription.unsubscribe();
  }

}
