import {createSelector} from 'reselect';
import {ActionReducerMap} from '@ngrx/store';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
// import * as fromRouter from '@ngrx/router-+state';
import * as fromAuth from 'ngr-auth';
import * as fromLayout from '../core/layout/shared/layout.reducer';
import * as fromSidenav from '../core/sidenav/shared/sidenav.reducer';

import * as fromAppDoctor from '../pages/doctor/+state/doctor.reducer';
import * as fromAppHospital from '../pages/hospital/+state/hospital.reducer';
import * as fromAppPatient from '../pages/patient/+state/patient.reducer';
import * as fromAppSpecialty from '../pages/specialty/+state/specialty.reducer';
import * as fromAppNote from '../pages/note/+state/note.reducer';


/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  // router: fromRouter.RouterReducerState;
  layout: fromLayout.State;
  sidenav: fromSidenav.State;
  auth: fromAuth.AuthState;
  appDoctor: fromAppDoctor.DoctorState;
  appHospital: fromAppHospital.HospitalState;
  appPatient: fromAppPatient.PatientState;
  appSpecialty: fromAppSpecialty.SpecialtyState;
  appNote: fromAppNote.NoteState;
}


/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
export const reducers: ActionReducerMap<State> = {
  // router: fromRouter.routerReducer,
  layout: fromLayout.reducer,
  sidenav: fromSidenav.reducer,
  auth: fromAuth.reducer,
  appDoctor: fromAppDoctor.reducer,
  appHospital: fromAppHospital.reducer,
  appPatient: fromAppPatient.reducer,
  appSpecialty: fromAppSpecialty.reducer,
  appNote: fromAppNote.reducer
};

/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `books` state.
 *
 * Selectors are used with the `select` operator.
 *
 * ```ts
 * class MyComponent {
 * 	constructor(+state: Observable<State>) {
 * 	  this.booksState$ = +state.select(getBooksState);
 * 	}
 * }
 * ```
 */

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function from the reselect library creates
 * very efficient selectors that are memoized and only recompute when arguments change.
 * The created selectors can also be composed together to select different
 * pieces of state.
 */

/**
 * Layout Reducers
 * @param state
 */

export const getLayoutState = (state: State) => state.layout;

export const getSidenavOpen = createSelector(getLayoutState, fromLayout.getSidenavOpen);
export const getSidenavCollapsed = createSelector(getLayoutState, fromLayout.getSidenavCollapsed);
export const getSidenavAlign = createSelector(getLayoutState, fromLayout.getSidenavAlign);
export const getSidenavMode = createSelector(getLayoutState, fromLayout.getSidenavMode);
export const getSidenavDisableClose = createSelector(getLayoutState, fromLayout.getSidenavDisableClose);
export const getQuickpanelOpen = createSelector(getLayoutState, fromLayout.getQuickpanelOpen);
export const getLayout = createSelector(getLayoutState, fromLayout.getLayout);
export const getLayoutBoxed = createSelector(getLayoutState, fromLayout.getLayoutBoxed);
export const getSettingsOpen = createSelector(getLayoutState, fromLayout.getSettingsOpen);
export const getCardElevation = createSelector(getLayoutState, fromLayout.getCardElevation);

/**
 * Sidenav Reducers
 * @param state
 */

export const getSidenavState = (state: State) => state.sidenav;

export const getSidenavItems = createSelector(getSidenavState, fromSidenav.getSidenavItems);
export const getSidenavCurrentlyOpen = createSelector(getSidenavState, fromSidenav.getSidenavCurrentlyOpen);
export const getSidenavCurrentlyNavPoints = createSelector(getSidenavState, fromSidenav.getSidenavCurrentlyNavPoints);
