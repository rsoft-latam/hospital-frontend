import {ActionReducer, MetaReducer} from '@ngrx/store';
import {localStorageSync} from 'ngrx-store-localstorage';
import {AuthState} from './auth.reducer';

export function localStorageSyncReducer(reducer: ActionReducer<AuthState>): ActionReducer<AuthState> {
  return localStorageSync({keys: ['authenticate', 'user'], rehydrate: true, removeOnUndefined: true})(reducer);
}

export const metaReducers: MetaReducer<AuthState>[] = [localStorageSyncReducer];

