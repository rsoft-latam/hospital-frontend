// NGRX
import {createAction, props} from '@ngrx/store';
// OTHERS
import {SpecialtyFilter} from '../models/specialty-filter.model';

export const CloseSidenav = createAction('[SPECIALTY]CloseSidenav');
export const OpenSidenav = createAction('[SPECIALTY]OpenSidenav', props<{ addStatus: string }>());

export const CloseFilter = createAction('[SPECIALTY]CloseFilter');
export const OpenFilter = createAction('[SPECIALTY]OpenFilter');

export const SetFilter = createAction('[SPECIALTY]SetFilter', props<{ filter: SpecialtyFilter }>());

export const AddAction = createAction('[SPECIALTY]AddAction', props<{ entity: any }>());
export const AddSuccess = createAction('[SPECIALTY]AddSuccess', props<{ entity: any }>());
export const AddFailure = createAction('[SPECIALTY]AddFailure', props<{ validation: any }>());

export const UpdateAction = createAction('[SPECIALTY]UpdateAction', props<{ entity: any }>());
export const UpdateSuccess = createAction('[SPECIALTY]UpdateSuccess', props<{ entity: any }>());
export const UpdateFailure = createAction('[SPECIALTY]UpdateFailure', props<{ validation: any }>());

export const DeleteAction = createAction('[SPECIALTY]DeleteAction', props<{ id: number }>());
export const DeleteSuccess = createAction('[SPECIALTY]DeleteSuccess', props<{ entity: any }>());
export const DeleteFailure = createAction('[SPECIALTY]DeleteFailure', props<{ validation: any }>());

export const GetSpecialtyAction = createAction('[SPECIALTY]GetSpecialtyAction', props<{ id: string }>());
export const GetSpecialtySuccess = createAction('[SPECIALTY]GetSpecialtySuccess', props<{ entity: any }>());
export const GetSpecialtyFailure = createAction('[SPECIALTY]GetSpecialtyFailure', props<{ validation: any }>());
