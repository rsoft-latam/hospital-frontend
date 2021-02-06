import {
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';

import {storeFreeze} from 'ngrx-store-freeze';
import {storeLogger} from 'ngrx-store-logger';
import {State} from './index';
import {environment} from '../../environments/environment';

export function logger(reducer: ActionReducer<State>): any {
  return storeLogger()(reducer);
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [storeFreeze, logger]
  : [];
