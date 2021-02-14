// ANGULAR
import {Injectable} from '@angular/core';
// RXJS
import {of} from 'rxjs';
import {catchError, exhaustMap, map} from 'rxjs/operators';
// NGRX
import * as actionsHospital from './hospital.actions';
import {Actions, createEffect, ofType} from '@ngrx/effects';
// OTHERS
import {HospitalService} from '../services/hospital.service';

@Injectable()
export class HospitalEffects {

  constructor(private actions$: Actions,
              private apiService: HospitalService) {
  }

  create$ = createEffect(() => this.actions$.pipe(
    ofType(actionsHospital.AddAction.type),
    exhaustMap((param: any) =>
      this.apiService.create(param.entity).pipe(
        map(success => actionsHospital.AddSuccess({entity: success})),
        catchError(error => of(actionsHospital.AddFailure({validation: error})))
      )
    )
  ));

  update$ = createEffect(() => this.actions$.pipe(
    ofType(actionsHospital.UpdateAction.type),
    exhaustMap((param: any) =>
      this.apiService.update(param.entity).pipe(
        map(success => actionsHospital.UpdateSuccess({entity: success})),
        catchError(error => of(actionsHospital.UpdateFailure({validation: error})))
      )
    )
  ));

  delete$ = createEffect(() => this.actions$.pipe(
    ofType(actionsHospital.DeleteAction.type),
    exhaustMap((param: any) =>
      this.apiService.delete(param.id).pipe(
        map(success => actionsHospital.DeleteSuccess({entity: success})),
        catchError(err => of(actionsHospital.DeleteFailure({validation: err})))
      )
    )
  ));

  getById$ = createEffect(() => this.actions$.pipe(
    ofType(actionsHospital.GetHospitalAction.type),
    exhaustMap((param: any) =>
      this.apiService.getById(param.id).pipe(
        map(success => actionsHospital.GetHospitalSuccess({entity: success})),
        catchError(error => of(actionsHospital.GetHospitalFailure({validation: error})))
      )
    )
  ));

}
