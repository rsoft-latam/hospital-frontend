// Angular
import {Injectable} from '@angular/core';
// RXJS
import {of} from 'rxjs';
import {catchError, exhaustMap, map} from 'rxjs/operators';
// NGRX
import * as amazon from './doctor.actions';
import {Actions, createEffect, ofType} from '@ngrx/effects';
// Others
import {DoctorService} from './services/doctor.service';

@Injectable()
export class DoctorEffects {

  constructor(private actions$: Actions,
              private apiService: DoctorService) {
  }

  create$ = createEffect(() => this.actions$.pipe(
    ofType(amazon.AddAction.type),
    exhaustMap((param: any) =>
      this.apiService.create(param.entity).pipe(
        map(success => amazon.AddSuccess({entity: success})),
        catchError(error => of(amazon.AddFailure({validation: error})))
      )
    )
  ));

  update$ = createEffect(() => this.actions$.pipe(
    ofType(amazon.UpdateAction.type),
    exhaustMap((param: any) =>
      this.apiService.update(param.entity).pipe(
        map(success => amazon.UpdateSuccess({entity: success})),
        catchError(error => of(amazon.UpdateFailure({validation: error})))
      )
    )
  ));

  delete$ = createEffect(() => this.actions$.pipe(
    ofType(amazon.DeleteAction.type),
    exhaustMap((param: any) =>
      this.apiService.delete(param.id).pipe(
        map(success => amazon.DeleteSuccess({entity: success})),
        catchError(err => of(amazon.DeleteFailure({validation: err})))
      )
    )
  ));

  getById$ = createEffect(() => this.actions$.pipe(
    ofType(amazon.GetHospitalAction.type),
    exhaustMap((param: any) =>
      this.apiService.getById(param.id).pipe(
        map(success => amazon.GetHospitalSuccess({entity: success})),
        catchError(error => of(amazon.GetHospitalFailure({validation: error})))
      )
    )
  ));

}
