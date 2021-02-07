// NGRX
import {Action, createReducer, on} from '@ngrx/store';
import * as actionsHospital from './hospital.actions';

export interface HospitalState {
  filterOpen: boolean;
  sidenavOpen: boolean;
  sidenavFormType: string | undefined;
}

export const initialState: HospitalState = {
  filterOpen: false,
  sidenavOpen: false,
  sidenavFormType: undefined
};

const featureReducer = createReducer(
  initialState,
  on(actionsHospital.OpenSidenav, (state, {addStatus}) => ({...state, sidenavOpen: true, sidenavFormType: addStatus})),
  on(actionsHospital.CloseSidenav, state => ({...state, sidenavOpen: false, sidenavFormType: undefined})),
  on(actionsHospital.CloseFilter, state => ({...state, filterOpen: false})),
  on(actionsHospital.OpenFilter, state => ({...state, filterOpen: true}))
);

export function reducer(state: HospitalState | undefined, action: Action): any {
  return featureReducer(state, action);
}
