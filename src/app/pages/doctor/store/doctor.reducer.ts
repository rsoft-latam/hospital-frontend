// NGRX
import {HospitalActionTypes, DoctorActions} from './doctor.actions';

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

export function reducer(state: DoctorState = initialState, action: DoctorActions): DoctorState {

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
