// NGRX
import {Action} from '@ngrx/store';
// OTHERS
import {DoctorFilter} from './models/doctor-filter.model';

export enum HospitalActionTypes {

  CloseSidenav = '[DOCTOR]CloseSidenav',
  OpenSidenav = '[DOCTOR]OpenSidenav',

  CloseFilter = '[DOCTOR]CloseFilter',
  OpenFilter = '[DOCTOR]OpenFilter',

  SetFilter = '[DOCTOR]SetFilter',

  AddAction = '[DOCTOR]AddAction',
  AddSuccess = '[DOCTOR]AddSuccess',
  AddFailure = '[DOCTOR]AddFailure',

  UpdateAction = '[DOCTOR]UpdateAction',
  UpdateSuccess = '[DOCTOR]UpdateSuccess',
  UpdateFailure = '[DOCTOR]UpdateFailure',

  DeleteAction = '[DOCTOR]DeleteAction',
  DeleteSuccess = '[DOCTOR]DeleteSuccess',
  DeleteFailure = '[DOCTOR]DeleteFailure',

  GetHospitalAction = '[DOCTOR]GetHospitalAction',
  GetHospitalSuccess = '[DOCTOR]GetHospitalSuccess',
  GetHospitalFailure = '[DOCTOR]GetHospitalFailure',

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

  constructor(public payload: { filter: DoctorFilter }) {
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
