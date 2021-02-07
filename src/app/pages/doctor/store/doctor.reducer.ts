// NGRX
import * as actionsDoctor from './doctor.actions';
import {Action, createReducer, on} from '@ngrx/store';

export interface DoctorState {
  filterOpen: boolean;
  sidenavOpen: boolean;
  sidenavFormType: string | undefined;
}

export const initialState: DoctorState = {
  filterOpen: false,
  sidenavOpen: false,
  sidenavFormType: undefined
};

const featureReducer = createReducer(
  initialState,
  on(actionsDoctor.OpenSidenav, (state, {addStatus}) => ({...state, sidenavOpen: true, sidenavFormType: addStatus})),
  on(actionsDoctor.CloseSidenav, state => ({...state, sidenavOpen: false, sidenavFormType: undefined})),
  on(actionsDoctor.CloseFilter, state => ({...state, filterOpen: false})),
  on(actionsDoctor.OpenFilter, state => ({...state, filterOpen: true}))
);

export function reducer(state: DoctorState | undefined, action: Action): any {
  return featureReducer(state, action);
}
