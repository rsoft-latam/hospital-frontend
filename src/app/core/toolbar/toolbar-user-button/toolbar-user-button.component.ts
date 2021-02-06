import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActionsSubject, Store} from '@ngrx/store';
import {State} from '../../../reducers';
import * as AuthActions from '../../../pages/login/store/auth.actions';
import {Subscription} from 'rxjs';
import {filter, shareReplay, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import * as authActions from '../../../pages/login/store/auth.actions';

@Component({
  selector: 'elastic-toolbar-user-button',
  template: `
    <div class="user-button-container" #userButton (vrClickOutside)="onClickOutside()">
      <button class="user-button" mat-button (click)="toggleDropdown()" [class.open]="isOpen">
    <span fxLayout="row" fxLayoutAlign="start center">
      <span class="avatar-container" fxLayout="row" fxLayoutAlign="start center">
        <img class="avatar" src="assets/img/demo/avatars/noavatar.png">
        <i class="status primary"></i>
      </span>
      <span class="name" fxHide fxShow.gt-sm>{{user?.displayName}}</span>
      <mat-icon class="icon" fxHide fxShow.gt-sm>keyboard_arrow_down</mat-icon>
    </span>
      </button>

      <div class="dropdown mat-elevation-z1" [class.open]="isOpen">
        <div class="content">
          <div class="list">
            <div class="item" fxLayout="row" fxLayoutAlign="start center" matRipple (click)="onClickLogout()">
              <mat-icon class="icon">exit_to_app</mat-icon>
              <span class="title">Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./toolbar-user-button.component.scss']
})
export class ToolbarUserButtonComponent implements OnInit, OnDestroy {

  isOpen: boolean;
  actionSubs: Subscription;
  userSubs: Subscription;

  $user = this.store.select(s => s.auth.user).pipe(shareReplay());
  user: any;

  constructor(private store: Store<State>,
              private router: Router,
              private actions: ActionsSubject) {
  }

  ngOnInit() {
    this.actionSubs = this.actions.pipe(
      filter(s => s.type === authActions.AuthActionTypes.LoginRedirect),
      tap(s => this.router.navigate(['/']))
    ).subscribe();

    this.userSubs = this.$user.pipe(
      tap(data => this.user = data))
      .subscribe();
  }

  ngOnDestroy() {
    this.actionSubs?.unsubscribe();
    this.userSubs?.unsubscribe();
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }

  onClickLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }
}
