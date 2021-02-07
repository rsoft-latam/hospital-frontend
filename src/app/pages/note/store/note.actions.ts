// NGRX
import {createAction, props} from '@ngrx/store';
// OTHERS
import {NoteFilter} from './models/note-filter.model';

export const CloseSidenav = createAction('[NOTE]CloseSidenav');
export const OpenSidenav = createAction('[NOTE]OpenSidenav', props<{ addStatus: string }>());

export const CloseFilter = createAction('[NOTE]CloseFilter');
export const OpenFilter = createAction('[NOTE]OpenFilter');

export const SetFilter = createAction('[NOTE]SetFilter', props<{ filter: NoteFilter }>());

export const AddAction = createAction('[NOTE]AddAction', props<{ entity: any }>());
export const AddSuccess = createAction('[NOTE]AddSuccess', props<{ entity: any }>());
export const AddFailure = createAction('[NOTE]AddFailure', props<{ validation: any }>());

export const UpdateAction = createAction('[NOTE]UpdateAction', props<{ entity: any }>());
export const UpdateSuccess = createAction('[NOTE]UpdateSuccess', props<{ entity: any }>());
export const UpdateFailure = createAction('[NOTE]UpdateFailure', props<{ validation: any }>());

export const DeleteAction = createAction('[NOTE]DeleteAction', props<{ id: number }>());
export const DeleteSuccess = createAction('[NOTE]DeleteSuccess', props<{ entity: any }>());
export const DeleteFailure = createAction('[NOTE]DeleteFailure', props<{ validation: any }>());

export const GetNoteAction = createAction('[NOTE]GetNoteAction', props<{ id: string }>());
export const GetNoteSuccess = createAction('[NOTE]GetNoteSuccess', props<{ entity: any }>());
export const GetNoteFailure = createAction('[NOTE]GetNoteFailure', props<{ validation: any }>());
