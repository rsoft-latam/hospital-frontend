import { Action } from '@ngrx/store';

export const OPEN_SIDENAV =   '[Layout] Open Sidenav';
export const CLOSE_SIDENAV =  '[Layout] Close Sidenav';
export const TOGGLE_SIDENAV =  '[Layout] Toggle Sidenav';
export const ENABLE_SIDENAV_COLLAPSE =  '[Layout] Enable Sidenav Collapse';
export const DISABLE_SIDENAV_COLLAPSE =  '[Layout] Disable Sidenav Collapse';
export const TOGGLE_SIDENAV_COLLAPSE =  '[Layout] Toggle Sidenav Collapse';
export const SET_SIDENAV_ALIGN =  '[Layout] Set Sidenav Align';
export const SET_SIDENAV_MODE =  '[Layout] Set Sidenav Mode';
export const SET_SIDENAV_DISABLE_CLOSE =  '[Layout] Set Sidenav Disable Close';
export const OPEN_QUICKPANEL =   '[Layout] Open Quickpanel';
export const CLOSE_QUICKPANEL =  '[Layout] Close Quickpanel';
export const TOGGLE_QUICKPANEL =  '[Layout] Toggle Quickpanel';
export const SELECT_LAYOUT =  '[Layout] Select Layout';
export const ENABLE_LAYOUT_BOXED = '[Layout] Enable Layout Boxed';
export const DISABLE_LAYOUT_BOXED = '[Layout] Disable Layout Boxed';
export const TOGGLE_LAYOUT_BOXED = '[Layout] Toggle Layout Boxed';
export const OPEN_SETTINGS = '[Layout] Open Settings';
export const CLOSE_SETTINGS = '[Layout] Close Settings';
export const TOGGLE_SETTINGS = '[Layout] Toggle Settings';
export const SET_CARD_ELEVATION = '[Layout] Set Card Elevation';


export class OpenSidenavAction implements Action {
  readonly type = OPEN_SIDENAV;
}

export class CloseSidenavAction implements Action {
  readonly type = CLOSE_SIDENAV;
}

export class ToggleSidenavAction implements Action {
  readonly type = TOGGLE_SIDENAV;
}

export class EnableSidenavCollapseAction implements Action {
  readonly type = ENABLE_SIDENAV_COLLAPSE;
}

export class DisableSidenavCollapseAction implements Action {
  readonly type = DISABLE_SIDENAV_COLLAPSE;
}

export class ToggleSidenavCollapseAction implements Action {
  readonly type = TOGGLE_SIDENAV_COLLAPSE;
}

export class SetSidenavAlignAction implements Action {
  readonly type = SET_SIDENAV_ALIGN;

  constructor(public payload: string) { }
}

export class SetSidenavModeAction implements Action {
  readonly type = SET_SIDENAV_MODE;

  constructor(public payload: string) { }
}

export class SetSidenavDisableCloseAction implements Action {
  readonly type = SET_SIDENAV_DISABLE_CLOSE;

  constructor(public payload: boolean) { }
}

export class OpenQuickpanelAction implements Action {
  readonly type = OPEN_QUICKPANEL;
}

export class CloseQuickpanelAction implements Action {
  readonly type = CLOSE_QUICKPANEL;
}

export class ToggleQuickpanelAction implements Action {
  readonly type = TOGGLE_QUICKPANEL;
}

export class SelectLayoutAction implements Action {
  readonly type = SELECT_LAYOUT;

  constructor(public payload: string) { }
}

export class EnableLayoutBoxedAction implements Action {
  readonly type = ENABLE_LAYOUT_BOXED;
}

export class DisableLayoutBoxedAction implements Action {
  readonly type = DISABLE_LAYOUT_BOXED;
}

export class ToggleLayoutBoxedAction implements Action {
  readonly type = TOGGLE_LAYOUT_BOXED;
}

export class OpenSettingsAction implements Action {
  readonly type = OPEN_SETTINGS;
}

export class CloseSettingsAction implements Action {
  readonly type = CLOSE_SETTINGS;
}

export class ToggleSettingsAction implements Action {
  readonly type = TOGGLE_SETTINGS;
}

export class SetCardElevationAction implements Action {
  readonly type = SET_CARD_ELEVATION;

  constructor(public payload: string) { }
}

export type Actions
  = OpenSidenavAction
  | CloseSidenavAction
  | ToggleSidenavAction
  | EnableSidenavCollapseAction
  | DisableSidenavCollapseAction
  | ToggleSidenavCollapseAction
  | SetSidenavAlignAction
  | SetSidenavModeAction
  | SetSidenavDisableCloseAction
  | OpenQuickpanelAction
  | CloseQuickpanelAction
  | ToggleQuickpanelAction
  | SelectLayoutAction
  | EnableLayoutBoxedAction
  | DisableLayoutBoxedAction
  | ToggleLayoutBoxedAction
  | OpenSettingsAction
  | CloseSettingsAction
  | ToggleSettingsAction
  | SetCardElevationAction;
