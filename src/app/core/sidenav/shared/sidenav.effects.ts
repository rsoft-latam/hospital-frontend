// ANGULAR
import {Injectable} from '@angular/core';
// RXJS
import {of} from 'rxjs';
import {catchError, exhaustMap, map} from 'rxjs/operators';
// NGRX
import * as sidenav from './sidenav.action';
import {Actions, ofType, Effect} from '@ngrx/effects';
// SERVICES
import {NavService} from '../../../shared/services/nav.service';

@Injectable()
export class SidenavEffects {

  constructor(private actions$: Actions,
              private navService: NavService) {
  }

  @Effect()
  sidenav$ = this.actions$.pipe(
    ofType(sidenav.NAV_ACTION),
    exhaustMap(() => {
        return this.navService.getNavStatus().pipe(
          map((success: any) => new sidenav.NavSuccess({nav: success.body})),
          catchError(error => of(new sidenav.NavFailure({validation: error})))
        );
      }
    )
  );

}
