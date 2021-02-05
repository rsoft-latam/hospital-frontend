import { Action } from '@ngrx/store';
import { Mail } from '../mail.model';

export const BULK_ADD_MAIL =   '[Inbox] Bulk Add Mail';
export const ADD_MAIL =   '[Inbox] Add Mail';
export const REMOVE_MAIL =  '[Inbox] Remove Mail';
export const OPEN_MAIL =  '[Inbox] Open Mail';
export const CLOSE_MAIL =  '[Inbox] Close Mail';
export const SET_ACTIVE_GROUP =  '[Inbox] Set Active Group';
export const SET_ACTIVE_TYPE =  '[Inbox] Set Active Type';
export const SHOW_ONLY_STARRED =  '[Inbox] Show Only Starred';
export const REMOVE_ALL_MAILS =  '[Inbox] Cleaned Mails';

export class BulkAddMailAction implements Action {
  readonly type = BULK_ADD_MAIL;

  constructor(public payload: Mail[]) { }
}

export class AddMailAction implements Action {
  readonly type = ADD_MAIL;

  constructor(public payload: Mail) { }
}

export class RemoveMailAction implements Action {
  readonly type = REMOVE_MAIL;

  constructor(public payload: Mail) { }
}

export class OpenMailAction implements Action {
  readonly type = OPEN_MAIL;

  constructor(public payload: Mail) { }
}

export class CloseMailAction implements Action {
  readonly type = CLOSE_MAIL;
}

export class SetActiveGroupAction implements Action {
  readonly type = SET_ACTIVE_GROUP;

  constructor(public payload: string) { }
}

export class SetActiveTypeAction implements Action {
  readonly type = SET_ACTIVE_TYPE;

  constructor(public payload: string) { }
}

export class ShowOnlyStarredAction implements Action {
  readonly type = SHOW_ONLY_STARRED;
}

export class RemoveAllMailsAction implements Action {
  readonly type = REMOVE_ALL_MAILS;
}

export type Actions
  = BulkAddMailAction
  | AddMailAction
  | RemoveMailAction
  | OpenMailAction
  | CloseMailAction
  | SetActiveGroupAction
  | SetActiveTypeAction
  | ShowOnlyStarredAction
  | RemoveAllMailsAction;
