// Angular
import {Injectable} from '@angular/core';
// RXJS
import {of} from 'rxjs';
import {catchError, exhaustMap, map} from 'rxjs/operators';
// NGRX
import * as noteActions from './note.actions';
import {Actions, ofType, createEffect} from '@ngrx/effects';
// Others
import {NoteService} from './services/note.service';

@Injectable()
export class NoteEffects {

  constructor(private actions$: Actions,
              private apiService: NoteService) {
  }

  create$ = createEffect(() => this.actions$.pipe(
    ofType(noteActions.AddAction.type),
    exhaustMap((param: any) =>
      this.apiService.create(param.entity).pipe(
        map(success => noteActions.AddSuccess({entity: success})),
        catchError(error => of(noteActions.AddFailure({validation: error})))
      )
    )
  ));

  update$ = createEffect(() => this.actions$.pipe(
    ofType(noteActions.UpdateAction.type),
    exhaustMap((param: any) =>
      this.apiService.update(param.entity).pipe(
        map(success => noteActions.UpdateSuccess({entity: success})),
        catchError(error => of(noteActions.UpdateFailure({validation: error})))
      )
    )
  ));

  delete$ = createEffect(() => this.actions$.pipe(
    ofType(noteActions.DeleteAction.type),
    exhaustMap((param: any) =>
      this.apiService.delete(param.id).pipe(
        map(success => noteActions.DeleteSuccess({entity: success})),
        catchError(err => of(noteActions.DeleteFailure({validation: err})))
      )
    )
  ));

  getById$ = createEffect(() => this.actions$.pipe(
    ofType(noteActions.GetNoteAction.type),
    exhaustMap((param: any) =>
      this.apiService.getById(param.id).pipe(
        map(success => noteActions.GetNoteSuccess({entity: success})),
        catchError(error => of(noteActions.GetNoteFailure({validation: error})))
      )
    )
  ));

}
