// Angular
import {Injectable} from '@angular/core';
// RXJS
import {of} from 'rxjs';
import {catchError, exhaustMap, map} from 'rxjs/operators';
// NGRX
import * as amazon from './specialty.actions';
import {Actions, ofType, Effect} from '@ngrx/effects';
// Others
import {SpecialtyService} from './services/specialty.service';

@Injectable()
export class SpecialtyEffects {

  constructor(private actions$: Actions,
              private apiService: SpecialtyService) {
  }

  @Effect()
  create$ = this.actions$.pipe(
    ofType(amazon.HospitalActionTypes.AddAction),
    map((action: amazon.AddAction) => action.payload),
    exhaustMap((param: any) =>
      this.apiService.create(param.entity).pipe(
        map(success => new amazon.AddSuccess({entity: success})),
        catchError(error => of(new amazon.AddFailure({validation: error})))
      )
    )
  );

  @Effect()
  update$ = this.actions$.pipe(
    ofType(amazon.HospitalActionTypes.UpdateAction),
    map((action: amazon.UpdateAction) => action.payload),
    exhaustMap((param: any) =>
      this.apiService.update(param.entity).pipe(
        map(success => new amazon.UpdateSuccess({entity: success})),
        catchError(error => of(new amazon.UpdateFailure({validation: error})))
      )
    )
  );

  @Effect()
  delete$ = this.actions$.pipe(
    ofType(amazon.HospitalActionTypes.DeleteAction),
    map((action: amazon.DeleteAction) => action.payload),
    exhaustMap((param: any) =>
      this.apiService.delete(param.id).pipe(
        map(success => new amazon.DeleteSuccess({entity: success})),
        catchError(err => of(new amazon.DeleteFailure({validation: err})))
      )
    )
  );

  @Effect()
  getById$ = this.actions$.pipe(
    ofType(amazon.HospitalActionTypes.GetHospitalAction),
    map((action: amazon.GetHospitalAction) => action.payload),
    exhaustMap((param: any) =>
      this.apiService.getById(param.id).pipe(
        map(success => new amazon.GetHospitalSuccess({entity: success})),
        catchError(error => of(new amazon.GetHospitalFailure({validation: error})))
      )
    )
  );

}
