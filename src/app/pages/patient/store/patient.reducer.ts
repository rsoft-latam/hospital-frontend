// NGRX
import {Action, createReducer, on} from '@ngrx/store';
import * as patientActions from './patient.actions';

export interface PatientState {
  filterOpen: boolean;
  sidenavOpen: boolean;
  sidenavFormType: string | undefined;
}

export const initialState: PatientState = {
  filterOpen: false,
  sidenavOpen: false,
  sidenavFormType: undefined
};

const featureReducer = createReducer(
  initialState,
  on(patientActions.OpenSidenav, (state, {addStatus}) => ({...state, sidenavOpen: true, sidenavFormType: addStatus})),
  on(patientActions.CloseSidenav, state => ({...state, sidenavOpen: false, sidenavFormType: undefined})),
  on(patientActions.CloseFilter, state => ({...state, filterOpen: false})),
  on(patientActions.OpenFilter, state => ({...state, filterOpen: true}))
);

export function reducer(state: PatientState | undefined, action: Action): any {
  return featureReducer(state, action);
}
