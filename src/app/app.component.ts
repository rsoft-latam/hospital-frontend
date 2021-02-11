// ANGULAR
import {Component, OnDestroy, OnInit} from '@angular/core';
// RXJS
import {Subscription} from 'rxjs';
// NGRX
import {Store} from '@ngrx/store';
import * as authActions from 'ngr-auth';

@Component({
  selector: 'app-root',
  template: `
    <route-handler></route-handler>
  `
})

export class AppComponent implements OnInit, OnDestroy {

  private authSubs: Subscription;

  constructor(private store: Store<any>) {
  }

  ngOnInit(): void {

    // GET AUTHENTICATION FROM LOCALSTORAGE
    if (localStorage.getItem('authenticate') && localStorage.getItem('user')) {
      const auth = {
        user: JSON.parse(localStorage.getItem('user')),
        authenticate: JSON.parse(localStorage.getItem('authenticate'))
      };
      this.store.dispatch(new authActions.AuthenticationSuccess(auth));
    }

  }

  ngOnDestroy(): void {
    this.authSubs?.unsubscribe();
  }

}
