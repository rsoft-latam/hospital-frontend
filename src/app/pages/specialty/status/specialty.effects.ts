// Angular
import {Injectable} from '@angular/core';
// RXJS
import {of} from 'rxjs';
import {catchError, exhaustMap, map} from 'rxjs/operators';
// NGRX
import * as specialtyActions from './specialty.actions';
import {Actions, ofType, createEffect} from '@ngrx/effects';
// Others
import {SpecialtyService} from '../services/specialty.service';

@Injectable()
export class SpecialtyEffects {

  constructor(private actions$: Actions,
              private apiService: SpecialtyService) {
  }

  create$ = createEffect(() => this.actions$.pipe(
    ofType(specialtyActions.AddAction.type),
    exhaustMap((param: any) =>
      this.apiService.create(param.entity).pipe(
        map(success => specialtyActions.AddSuccess({entity: success})),
        catchError(error => of(specialtyActions.AddFailure({validation: error})))
      )
    )
  ));

  update$ = createEffect(() => this.actions$.pipe(
    ofType(specialtyActions.UpdateAction.type),
    exhaustMap((param: any) =>
      this.apiService.update(param.entity).pipe(
        map(success => specialtyActions.UpdateSuccess({entity: success})),
        catchError(error => of(specialtyActions.UpdateFailure({validation: error})))
      )
    )
  ));

  delete$ = createEffect(() => this.actions$.pipe(
    ofType(specialtyActions.DeleteAction.type),
    exhaustMap((param: any) =>
      this.apiService.delete(param.id).pipe(
        map(success => specialtyActions.DeleteSuccess({entity: success})),
        catchError(err => of(specialtyActions.DeleteFailure({validation: err})))
      )
    )
  ));

  getById$ = createEffect(() => this.actions$.pipe(
    ofType(specialtyActions.GetSpecialtyAction.type),
    exhaustMap((param: any) =>
      this.apiService.getById(param.id).pipe(
        map(success => specialtyActions.GetSpecialtySuccess({entity: success})),
        catchError(error => of(specialtyActions.GetSpecialtyFailure({validation: error})))
      )
    )
  ));

}
