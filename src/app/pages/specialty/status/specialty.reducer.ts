// NGRX
import {Action, createReducer, on} from '@ngrx/store';
import * as specialtyActions from './specialty.actions';

export interface SpecialtyState {
  filterOpen: boolean;
  sidenavOpen: boolean;
  sidenavFormType: string | undefined;
}

export const initialState: SpecialtyState = {
  filterOpen: false,
  sidenavOpen: false,
  sidenavFormType: undefined
};

const featureReducer = createReducer(
  initialState,
  on(specialtyActions.OpenSidenav, (state, {addStatus}) => ({...state, sidenavOpen: true, sidenavFormType: addStatus})),
  on(specialtyActions.CloseSidenav, state => ({...state, sidenavOpen: false, sidenavFormType: undefined})),
  on(specialtyActions.CloseFilter, state => ({...state, filterOpen: false})),
  on(specialtyActions.OpenFilter, state => ({...state, filterOpen: true}))
);

export function reducer(state: SpecialtyState | undefined, action: Action): any {
  return featureReducer(state, action);
}
