import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ROUTE_TRANSITION} from '../../app.animation';
import {Subscription} from 'rxjs';
import {ActionsSubject, Store} from '@ngrx/store';
import {AuthActionTypes} from './store/auth.actions';
import {State} from '../../reducers';
import {filter, tap} from 'rxjs/operators';
import * as AuthActions from './store/auth.actions';

@Component({
  template: `
    <div fxLayout="row" fxLayoutAlign="center center" style="height: 100%;">
      <div class="login mat-elevation-z12">
        <div class="login-header" fxLayout="column" fxLayoutAlign="center center">
          <img class="logo" src="assets/img/logo2x.png">
        </div>
        <form #form="ngForm" (ngSubmit)="login()">
          <div class="login-content" fxLayout="column" fxLayoutAlign="start stretch">

            <div class="alert alert-danger" style="padding: 5px;" fxLayout="row" *ngIf="authenticationError">
              <div fxLayout="row" fxLayoutAlign="center center" fxFlex>
                <div class="name" fxHide fxShow.gt-sm>{{ alertMessage }}</div>
              </div>
              <div fxLayout="row" fxLayoutAlign="start center">
                <button type="button" mat-icon-button (click)="authenticationError = false">
                  <mat-icon class="close">close</mat-icon>
                </button>
              </div>
            </div>
            <br>

            <mat-form-field>
              <input matInput placeholder="Username" name="username" required [(ngModel)]="username">
            </mat-form-field>
            <mat-form-field>
              <input matInput placeholder="Password" type="password" name="password" required [(ngModel)]="password">
            </mat-form-field>

            <br>


            <button type="submit" mat-raised-button color="primary" [disabled]="isLoading">
              <span class="login-btn-text-align">Login</span>
              <mat-icon>lock</mat-icon>
              <span *ngIf="isLoading" class="login-circular-btn-progress">
            <mat-progress-spinner mode="indeterminate" [diameter]="20"></mat-progress-spinner>
            </span>
            </button>

            <br>

          </div>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['./login.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: {'[@routeTransition]': ''}
})
export class LoginComponent implements OnInit, OnDestroy {

  alertMessage: string;
  isLoading = false;
  authenticationError = false;

  username = 'admin';
  password = 'admin';

  actionSubsc: Subscription[] = [];

  constructor(private store: Store<State>,
              private router: Router,
              private actions: ActionsSubject) {
  }

  ngOnInit() {
    this.actionSubsc.push(this.actions.pipe(
      filter(s => s.type === AuthActionTypes.AuthenticationSuccess),
      tap(() => this.router.navigate(['hospital']))
    ).subscribe());

    this.actionSubsc.push(this.actions.pipe(
      filter(s => s.type === AuthActionTypes.AuthenticationFailure),
      tap(s => {
        this.isLoading = false;
        this.authenticationError = true;
        this.alertMessage = 'User or password invalid.';
      })
    ).subscribe());
  }

  login() {
    this.isLoading = true;
    this.store.dispatch(
      new AuthActions.Login({credentials: {username: this.username, password: this.password, rememberMe: true}}));
  }

  ngOnDestroy() {
    this.actionSubsc.forEach(subs => subs.unsubscribe());
  }
}
