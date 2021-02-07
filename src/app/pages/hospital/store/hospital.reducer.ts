// NGRX
import {HospitalActionTypes, HospitalActions} from './hospital.actions';

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

export function reducer(state: HospitalState = initialState, action: HospitalActions): HospitalState {

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
