// NGRX
import {Action} from '@ngrx/store';
// OTHERS
import {HospitalFilter} from './models/patient-filter.model';

export enum HospitalActionTypes {

  CloseSidenav = '[PATIENT]CloseSidenav',
  OpenSidenav = '[PATIENT]OpenSidenav',

  CloseFilter = '[PATIENT]CloseFilter',
  OpenFilter = '[PATIENT]OpenFilter',

  SetFilter = '[PATIENT]SetFilter',

  AddAction = '[PATIENT]AddAction',
  AddSuccess = '[PATIENT]AddSuccess',
  AddFailure = '[PATIENT]AddFailure',

  UpdateAction = '[PATIENT]UpdateAction',
  UpdateSuccess = '[PATIENT]UpdateSuccess',
  UpdateFailure = '[PATIENT]UpdateFailure',

  DeleteAction = '[PATIENT]DeleteAction',
  DeleteSuccess = '[PATIENT]DeleteSuccess',
  DeleteFailure = '[PATIENT]DeleteFailure',

  GetHospitalAction = '[PATIENT]GetHospitalAction',
  GetHospitalSuccess = '[PATIENT]GetHospitalSuccess',
  GetHospitalFailure = '[PATIENT]GetHospitalFailure',

}

export class OpenSidenav implements Action {
  readonly type = HospitalActionTypes.OpenSidenav;

  constructor(public payload: { addStatus: string }) {
  }
}

export class CloseSidenav implements Action {
  readonly type = HospitalActionTypes.CloseSidenav;
}


export class OpenFilter implements Action {
  readonly type = HospitalActionTypes.OpenFilter;
}

export class CloseFilter implements Action {
  readonly type = HospitalActionTypes.CloseFilter;
}

export class SetFilter implements Action {
  readonly type = HospitalActionTypes.SetFilter;

  constructor(public payload: { filter: HospitalFilter }) {
  }
}

export class AddAction implements Action {
  readonly type = HospitalActionTypes.AddAction;

  constructor(public payload: { entity: any }) {
  }
}

export class AddSuccess implements Action {
  readonly type = HospitalActionTypes.AddSuccess;

  constructor(public payload: { entity: any }) {
  }
}

export class AddFailure implements Action {
  readonly type = HospitalActionTypes.AddFailure;

  constructor(public payload: { validation: any }) {
  }
}


export class UpdateAction implements Action {
  readonly type = HospitalActionTypes.UpdateAction;

  constructor(public payload: { entity: any }) {
  }
}

export class UpdateSuccess implements Action {
  readonly type = HospitalActionTypes.UpdateSuccess;

  constructor(public payload: { entity: any }) {
  }
}

export class UpdateFailure implements Action {
  readonly type = HospitalActionTypes.UpdateFailure;

  constructor(public payload: { validation: any }) {
  }
}


export class DeleteAction implements Action {
  readonly type = HospitalActionTypes.DeleteAction;

  constructor(public payload: { id: number }) {
  }
}

export class DeleteSuccess implements Action {
  readonly type = HospitalActionTypes.DeleteSuccess;

  constructor(public payload: { entity: any }) {
  }
}

export class DeleteFailure implements Action {
  readonly type = HospitalActionTypes.DeleteFailure;

  constructor(public payload: { validation: any }) {
  }
}


export class GetHospitalAction implements Action {
  readonly type = HospitalActionTypes.GetHospitalAction;

  constructor(public payload: { id: string }) {
  }
}

export class GetHospitalSuccess implements Action {
  readonly type = HospitalActionTypes.GetHospitalSuccess;

  constructor(public payload: { entity: any }) {
  }
}

export class GetHospitalFailure implements Action {
  readonly type = HospitalActionTypes.GetHospitalFailure;

  constructor(public payload: { validation: any }) {
  }

}

export type DoctorActions =
  | CloseSidenav
  | OpenSidenav

  | CloseFilter
  | OpenFilter

  | SetFilter

  | AddAction
  | AddSuccess
  | AddFailure

  | UpdateAction
  | UpdateSuccess
  | UpdateFailure

  | DeleteAction
  | DeleteSuccess
  | DeleteFailure

  | GetHospitalAction
  | GetHospitalSuccess
  | GetHospitalFailure;
