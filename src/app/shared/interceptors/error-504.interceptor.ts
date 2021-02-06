// ANGULAR
import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse} from '@angular/common/http';
// RXJS
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable()
export class Error504Interceptor implements HttpInterceptor {

  constructor() {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse && (
          (<HttpErrorResponse> error).status === 0 || (<HttpErrorResponse> error).status === 504
        )) {
          return this.handle504Error(req, next);
        } else {
          return throwError(error);
        }
      }));

  }

  handle504Error(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req);
  }

}
