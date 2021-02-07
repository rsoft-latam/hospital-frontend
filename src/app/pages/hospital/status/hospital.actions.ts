// NGRX
import {createAction, props} from '@ngrx/store';
// OTHERS
import {HospitalFilter} from '../models/hospital-filter.model';

export const CloseSidenav = createAction('[HOSPITAL]CloseSidenav');
export const OpenSidenav = createAction('[HOSPITAL]OpenSidenav', props<{ addStatus: string }>());

export const CloseFilter = createAction('[HOSPITAL]CloseFilter');
export const OpenFilter = createAction('[HOSPITAL]OpenFilter');

export const SetFilter = createAction('[HOSPITAL]SetFilter', props<{ filter: HospitalFilter }>());

export const AddAction = createAction('[HOSPITAL]AddAction', props<{ entity: any }>());
export const AddSuccess = createAction('[HOSPITAL]AddSuccess', props<{ entity: any }>());
export const AddFailure = createAction('[HOSPITAL]AddFailure', props<{ validation: any }>());

export const UpdateAction = createAction('[HOSPITAL]UpdateAction', props<{ entity: any }>());
export const UpdateSuccess = createAction('[HOSPITAL]UpdateSuccess', props<{ entity: any }>());
export const UpdateFailure = createAction('[HOSPITAL]UpdateFailure', props<{ validation: any }>());

export const DeleteAction = createAction('[HOSPITAL]DeleteAction', props<{ id: number }>());
export const DeleteSuccess = createAction('[HOSPITAL]DeleteSuccess', props<{ entity: any }>());
export const DeleteFailure = createAction('[HOSPITAL]DeleteFailure', props<{ validation: any }>());

export const GetHospitalAction = createAction('[HOSPITAL]GetHospitalAction', props<{ id: string }>());
export const GetHospitalSuccess = createAction('[HOSPITAL]GetHospitalSuccess', props<{ entity: any }>());
export const GetHospitalFailure = createAction('[HOSPITAL]GetHospitalFailure', props<{ validation: any }>());
