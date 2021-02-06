import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {NavigationEnd, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../../reducers/index';
import {SidenavItem} from '../../sidenav/sidenav-item/sidenav-item.model';
import {SetCurrentlyOpenByRouteAction} from '../../sidenav/shared/sidenav.action';

@Component({
  selector: 'elastic-toolbar-navigation',
  template: `
    <div class="horizontal-navigation" fxHide fxShow.gt-sm>
      <div class="container">
        <div class="menu" fxLayout="row">
          <div *ngFor="let item of sidenavItems$ | async; let index = index;">
            <elastic-toolbar-navigation-item *ngIf="index < showMoreButtonAfterIndex"
                                             [item]="item" [currentlyOpen]="currentlyOpen$ | async"></elastic-toolbar-navigation-item>

            <div class="more-button-container" fxLayout="row" fxLayoutAlign="start center" *ngIf="index == showMoreButtonAfterIndex">
              <button mat-icon-button class="more-button" [matMenuTriggerFor]="moreMenu">
                <mat-icon>more_vert</mat-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--<mat-menu #moreMenu="matMenu" [overlapTrigger]="false">-->
    <mat-menu #moreMenu="matMenu">
      <div class="layout gamma" (click)="$event.stopPropagation()" *ngFor="let item of sidenavItems$ | async; let index = index;">
        <elastic-toolbar-navigation-dropdown-item *ngIf="index >= showMoreButtonAfterIndex" class="dropdown-item-container"
                                                  [item]="item"
                                                  [currentlyOpen]="currentlyOpen$ | async"></elastic-toolbar-navigation-dropdown-item>
      </div>
    </mat-menu>
  `,
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
  ) {
  }

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
    this._routerEventsSubscription?.unsubscribe();
  }

}
