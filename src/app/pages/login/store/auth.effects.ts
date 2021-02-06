import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthConfigService} from './services/auth-config.service';
import {AuthActionTypes, AuthenticationFailure, Login, AuthenticationSuccess, LoginRedirect} from './auth.actions';
import {Router} from '@angular/router';
import {exhaustMap, map, catchError, withLatestFrom} from 'rxjs/operators';
import {AuthService} from './services/auth.service';
import {of} from 'rxjs';
import {AuthenticateByLogin} from './models/auth.models';
import {Store} from '@ngrx/store';


@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private config: AuthConfigService,
    private service: AuthService,
    private router: Router,
    private store: Store<any>
  ) {
  }

  @Effect()
  logout$ = this.actions$.pipe(
    ofType(AuthActionTypes.Logout, AuthActionTypes.AuthenticationFailure),
    map(param => new LoginRedirect())
  );

  @Effect()
  login$ = this.actions$.pipe(
    ofType(AuthActionTypes.Login),
    map((action: Login) => action.payload),
    exhaustMap((param: { credentials: AuthenticateByLogin }) =>
      this.service.login(param.credentials).pipe(
        map(success => new AuthenticationSuccess(success)),
        catchError(error => of(new AuthenticationFailure(error)))
      )
    )
  );

  @Effect()
  requestAuthenticationFailure$ = this.actions$.pipe(
    ofType(AuthActionTypes.RequestAuthenticationFailure),
    withLatestFrom(this.store),
    map(([action, storeState]) =>
      new AuthenticationFailure('temp')
    )
  );
}
