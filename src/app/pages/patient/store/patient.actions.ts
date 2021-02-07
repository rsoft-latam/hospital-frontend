// NGRX
import {createAction, props} from '@ngrx/store';
// OTHERS
import {HospitalFilter} from './models/patient-filter.model';

export const CloseSidenav = createAction('[PATIENT]CloseSidenav');
export const OpenSidenav = createAction('[PATIENT]OpenSidenav', props<{ addStatus: string }>());

export const CloseFilter = createAction('[PATIENT]CloseFilter');
export const OpenFilter = createAction('[PATIENT]OpenFilter');

export const SetFilter = createAction('[PATIENT]SetFilter', props<{ filter: HospitalFilter }>());

export const AddAction = createAction('[PATIENT]AddAction', props<{ entity: any }>());
export const AddSuccess = createAction('[PATIENT]AddSuccess', props<{ entity: any }>());
export const AddFailure = createAction('[PATIENT]AddFailure', props<{ validation: any }>());

export const UpdateAction = createAction('[PATIENT]UpdateAction', props<{ entity: any }>());
export const UpdateSuccess = createAction('[PATIENT]UpdateSuccess', props<{ entity: any }>());
export const UpdateFailure = createAction('[PATIENT]UpdateFailure', props<{ validation: any }>());

export const DeleteAction = createAction('[PATIENT]DeleteAction', props<{ id: number }>());
export const DeleteSuccess = createAction('[PATIENT]DeleteSuccess', props<{ entity: any }>());
export const DeleteFailure = createAction('[PATIENT]DeleteFailure', props<{ validation: any }>());

export const GetPatientAction = createAction('[PATIENT]GetPatientAction', props<{ id: string }>());
export const GetPatientSuccess = createAction('[PATIENT]GetPatientSuccess', props<{ entity: any }>());
export const GetPatientFailure = createAction('[PATIENT]GetPatientFailure', props<{ validation: any }>());
