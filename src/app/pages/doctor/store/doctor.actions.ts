// NGRX
import {createAction, props} from '@ngrx/store';
// OTHERS
import {DoctorFilter} from './models/doctor-filter.model';

export const CloseSidenav = createAction('[DOCTOR]CloseSidenav');
export const OpenSidenav = createAction('[DOCTOR]OpenSidenav', props<{ addStatus: string }>());

export const CloseFilter = createAction('[DOCTOR]CloseFilter');
export const OpenFilter = createAction('[DOCTOR]OpenFilter');

export const SetFilter = createAction('[DOCTOR]SetFilter', props<{ filter: DoctorFilter }>());

export const AddAction = createAction('[DOCTOR]AddAction', props<{ entity: any }>());
export const AddSuccess = createAction('[DOCTOR]AddSuccess', props<{ entity: any }>());
export const AddFailure = createAction('[DOCTOR]AddFailure', props<{ validation: any }>());

export const UpdateAction = createAction('[DOCTOR]UpdateAction', props<{ entity: any }>());
export const UpdateSuccess = createAction('[DOCTOR]UpdateSuccess', props<{ entity: any }>());
export const UpdateFailure = createAction('[DOCTOR]UpdateFailure', props<{ validation: any }>());

export const DeleteAction = createAction('[DOCTOR]DeleteAction', props<{ id: number }>());
export const DeleteSuccess = createAction('[DOCTOR]DeleteSuccess', props<{ entity: any }>());
export const DeleteFailure = createAction('[DOCTOR]DeleteFailure', props<{ validation: any }>());

export const GetHospitalAction = createAction('[DOCTOR]GetHospitalActionn', props<{ id: string }>());
export const GetHospitalSuccess = createAction('[DOCTOR]GetHospitalSuccess', props<{ entity: any }>());
export const GetHospitalFailure = createAction('[DOCTOR]GetHospitalFailure', props<{ validation: any }>());
