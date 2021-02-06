import {Action} from '@ngrx/store';
import {User, AuthenticateByLogin, AuthenticateResponse} from './models/auth.models';


export enum AuthActionTypes {
  Login = '[Auth]Login',
  Logout = '[Auth]Logout',
  LoginRedirect = '[Auth]LoginRedirect',

  AuthenticationSuccess = '[Auth]AuthenticationSuccess',
  AuthenticationFailure = '[Auth]AuthenticationFailure',

  RequestAuthenticationFailure = '[Auth]RequestAuthenticationFailure',
  RequestAuthorizationFailure = '[Auth]RequestAuthorizationFailure'
};

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: { credentials: AuthenticateByLogin }) {
  }
}

export class AuthenticationSuccess implements Action {
  readonly type = AuthActionTypes.AuthenticationSuccess;

  constructor(public payload: { user: User, authenticate: AuthenticateResponse }) {
  }
}

export class AuthenticationFailure implements Action {
  readonly type = AuthActionTypes.AuthenticationFailure;

  constructor(public payload: string) {
  }
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export class LoginRedirect implements Action {
  readonly type = AuthActionTypes.LoginRedirect;

  constructor() {
  }
}

export class RequestAuthenticationFailure implements Action {
  readonly type = AuthActionTypes.RequestAuthenticationFailure;
}

export class RequestAuthorizationFailure implements Action {
  readonly type = AuthActionTypes.RequestAuthorizationFailure;
}

export type AuthActions =
  | Login
  | AuthenticationSuccess
  | AuthenticationFailure
  | Logout
  | LoginRedirect
  | RequestAuthenticationFailure
  | RequestAuthorizationFailure;
