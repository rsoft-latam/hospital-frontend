import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {HttpRequest} from '@angular/common/http';
import {HttpHandler} from '@angular/common/http';
import {HttpEvent} from '@angular/common/http';
import {Store, ActionsSubject, Action} from '@ngrx/store';
import {throwError, Observable} from 'rxjs';
import {tap, catchError, withLatestFrom, exhaustMap} from 'rxjs/operators';
import {RequestAuthenticationFailure, AuthActionTypes} from '../auth.actions';
import {ofType} from '@ngrx/effects';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

  authToken: string;

  constructor(private store: Store<any>, private actions: ActionsSubject) {
    this.store.select(s => s.auth.authenticate).pipe(tap(auth => this.authToken = auth == null ? null : auth.authToken)).subscribe();

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.addToken(req, this.authToken)).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse && (<HttpErrorResponse>error).status === 401) {
          return this.handle401Error(req, next);
        } else {
          return throwError(error); // check
        }
      }));
  }

  addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    if (!token)
      return req;

    return req.clone({setHeaders: {Authorization: 'Bearer ' + token}});
  }

  handle401Error(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.store.dispatch(new RequestAuthenticationFailure());

    return this.actions.pipe(
      ofType(AuthActionTypes.AuthenticationSuccess, AuthActionTypes.AuthenticationFailure),
      withLatestFrom(this.store),
      exhaustMap(([action, storeState]) => {

        // ???
        let act: Action = <Action>action;

        if (act.type == AuthActionTypes.AuthenticationSuccess) {
          return next.handle(this.addToken(req, storeState.auth.authenticate.authToken));
        } else {
          return throwError(new HttpResponse({status: 401})); // check
        }
      }));
  }
}
