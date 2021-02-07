// Angular
import {Injectable} from '@angular/core';
// RXJS
import {of} from 'rxjs';
import {catchError, exhaustMap, map} from 'rxjs/operators';
// NGRX
import * as actionsDoctor from './doctor.actions';
import {Actions, createEffect, ofType} from '@ngrx/effects';
// Others
import {DoctorService} from './services/doctor.service';

@Injectable()
export class DoctorEffects {

  constructor(private actions$: Actions,
              private apiService: DoctorService) {
  }

  create$ = createEffect(() => this.actions$.pipe(
    ofType(actionsDoctor.AddAction.type),
    exhaustMap((param: any) =>
      this.apiService.create(param.entity).pipe(
        map(success => actionsDoctor.AddSuccess({entity: success})),
        catchError(error => of(actionsDoctor.AddFailure({validation: error})))
      )
    )
  ));

  update$ = createEffect(() => this.actions$.pipe(
    ofType(actionsDoctor.UpdateAction.type),
    exhaustMap((param: any) =>
      this.apiService.update(param.entity).pipe(
        map(success => actionsDoctor.UpdateSuccess({entity: success})),
        catchError(error => of(actionsDoctor.UpdateFailure({validation: error})))
      )
    )
  ));

  delete$ = createEffect(() => this.actions$.pipe(
    ofType(actionsDoctor.DeleteAction.type),
    exhaustMap((param: any) =>
      this.apiService.delete(param.id).pipe(
        map(success => actionsDoctor.DeleteSuccess({entity: success})),
        catchError(err => of(actionsDoctor.DeleteFailure({validation: err})))
      )
    )
  ));

  getById$ = createEffect(() => this.actions$.pipe(
    ofType(actionsDoctor.GetDoctorAction.type),
    exhaustMap((param: any) =>
      this.apiService.getById(param.id).pipe(
        map(success => actionsDoctor.GetDoctorSuccess({entity: success})),
        catchError(error => of(actionsDoctor.GetDoctorFailure({validation: error})))
      )
    )
  ));

}
