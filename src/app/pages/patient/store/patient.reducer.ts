// NGRX
import {HospitalActionTypes, DoctorActions} from './patient.actions';

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

export function reducer(state: PatientState = initialState, action: DoctorActions): PatientState {

  switch (action.type) {

    case HospitalActionTypes.OpenSidenav: {
      return {
        ...state,
        sidenavOpen: true,
        sidenavFormType: action.payload.addStatus
      };
    }

    case HospitalActionTypes.CloseSidenav: {
      return {
        ...state,
        sidenavOpen: false,
        sidenavFormType: undefined
      };
    }

    case HospitalActionTypes.CloseFilter: {
      return {
        ...state,
        filterOpen: false
      };
    }

    case HospitalActionTypes.OpenFilter: {
      return {
        ...state,
        filterOpen: true
      };
    }

    default:
      return state;
  }

}
