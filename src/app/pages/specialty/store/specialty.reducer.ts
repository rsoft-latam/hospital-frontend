// NGRX
import {HospitalActionTypes, DoctorActions} from './specialty.actions';

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

export function reducer(state: SpecialtyState = initialState, action: DoctorActions): SpecialtyState {

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
