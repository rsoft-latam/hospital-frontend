import {Action} from '@ngrx/store';
import {SidenavItem} from '../sidenav-item/sidenav-item.model';

export const ADD_SIDENAV_ITEM = '[Sidenav] Add Item';
export const REMOVE_SIDENAV_ITEM = '[Sidenav] Remove Item';
export const TOGGLE_OPEN_SIDENAV_ITEM = '[Sidenav] Toggle Item';
export const SET_SIDENAV_ITEMS = '[Sidenav] Set Sidenav Items';
export const SET_CURRENTLY_OPEN_BY_ROUTE = '[Sidenav] Set CurrentlyOpen by Route';

export const NAV_ACTION = '[Sidenav] NavAction';
export const NAV_SUCCESS = '[Sidenav] NavSuccess';
export const NAV_FAILURE = '[Sidenav] NavFailure';

export class AddSidenavItemAction implements Action {
  readonly type = ADD_SIDENAV_ITEM;

  constructor(public payload: SidenavItem) {
  }
}

export class RemoveSidenavItemAction implements Action {
  readonly type = REMOVE_SIDENAV_ITEM;

  constructor(public payload: SidenavItem) {
  }
}

export class SetSidenavItemsAction implements Action {
  readonly type = SET_SIDENAV_ITEMS;

  constructor(public payload: SidenavItem[]) {
  }
}

export class ToggleOpenSidenavItemAction implements Action {
  readonly type = TOGGLE_OPEN_SIDENAV_ITEM;

  constructor(public payload: SidenavItem) {
  }
}

export class SetCurrentlyOpenByRouteAction implements Action {
  readonly type = SET_CURRENTLY_OPEN_BY_ROUTE;

  constructor(public payload: string) {
  }
}

export class NavAction implements Action {
  readonly type = NAV_ACTION;
}

export class NavSuccess implements Action {
  readonly type = NAV_SUCCESS;

  constructor(public payload: { nav: any }) {
  }
}

export class NavFailure implements Action {
  readonly type = NAV_FAILURE;

  constructor(public payload: { validation: any }) {
  }
}

export type Actions
  = AddSidenavItemAction
  | RemoveSidenavItemAction
  | ToggleOpenSidenavItemAction
  | SetCurrentlyOpenByRouteAction
  | SetSidenavItemsAction
  | NavAction
  | NavSuccess
  | NavFailure;
