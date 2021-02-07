// Angular
import {Injectable} from '@angular/core';
// RXJS
import {of} from 'rxjs';
import {catchError, exhaustMap, map} from 'rxjs/operators';
// NGRX
import * as patientActions from './patient.actions';
import {Actions, ofType, createEffect} from '@ngrx/effects';
// Others
import {PatientService} from './services/patient.service';

@Injectable()
export class PatientEffects {

  constructor(private actions$: Actions,
              private apiService: PatientService) {
  }

  create$ = createEffect(() => this.actions$.pipe(
    ofType(patientActions.AddAction.type),
    exhaustMap((param: any) =>
      this.apiService.create(param.entity).pipe(
        map(success => patientActions.AddSuccess({entity: success})),
        catchError(error => of(patientActions.AddFailure({validation: error})))
      )
    )
  ));

  update$ = createEffect(() => this.actions$.pipe(
    ofType(patientActions.UpdateAction.type),
    exhaustMap((param: any) =>
      this.apiService.update(param.entity).pipe(
        map(success => patientActions.UpdateSuccess({entity: success})),
        catchError(error => of(patientActions.UpdateFailure({validation: error})))
      )
    )
  ));

  delete$ = createEffect(() => this.actions$.pipe(
    ofType(patientActions.DeleteAction.type),
    exhaustMap((param: any) =>
      this.apiService.delete(param.id).pipe(
        map(success => patientActions.DeleteSuccess({entity: success})),
        catchError(err => of(patientActions.DeleteFailure({validation: err})))
      )
    )
  ));

  getById$ = createEffect(() => this.actions$.pipe(
    ofType(patientActions.GetPatientAction.type),
    exhaustMap((param: any) =>
      this.apiService.getById(param.id).pipe(
        map(success => patientActions.GetPatientSuccess({entity: success})),
        catchError(error => of(patientActions.GetPatientFailure({validation: error})))
      )
    )
  ));

}
