// ANGULAR
import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse} from '@angular/common/http';
// RXJS
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
// Modules
import {MatDialog} from '@angular/material/dialog';
// COMPONENTS
import {AlertComponent} from '../modules/alert/alert.component';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(public dialog: MatDialog) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
        },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 500) {
              this.dialog.open(AlertComponent, {
                data: {type: 'error', message: err.message}
              });
            }
          }
        }
      )
    );
  }

}
