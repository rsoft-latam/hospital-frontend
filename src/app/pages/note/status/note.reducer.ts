// NGRX
import {Action, createReducer, on} from '@ngrx/store';
import * as noteActions from './note.actions';

export interface NoteState {
  filterOpen: boolean;
  sidenavOpen: boolean;
  sidenavFormType: string | undefined;
}

export const initialState: NoteState = {
  filterOpen: false,
  sidenavOpen: false,
  sidenavFormType: undefined
};

const featureReducer = createReducer(
  initialState,
  on(noteActions.OpenSidenav, (state, {addStatus}) => ({...state, sidenavOpen: true, sidenavFormType: addStatus})),
  on(noteActions.CloseSidenav, state => ({...state, sidenavOpen: false, sidenavFormType: undefined})),
  on(noteActions.CloseFilter, state => ({...state, filterOpen: false})),
  on(noteActions.OpenFilter, state => ({...state, filterOpen: true}))
);

export function reducer(state: NoteState | undefined, action: Action): any {
  return featureReducer(state, action);
}
