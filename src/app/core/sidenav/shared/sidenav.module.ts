// ANGULAR
import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';
// NGRX
import {StoreModule} from '@ngrx/store';
import {reducer} from './sidenav.reducer';
import {EffectsModule} from '@ngrx/effects';
import {SidenavEffects} from './sidenav.effects';
// SERVICES
import {AppConfig} from '../../../shared/models/app-config.model';

@NgModule({
  imports: [CommonModule]
})

export class SidenavModule {
  static forRoot(config: AppConfig): ModuleWithProviders<any> {
    return {
      ngModule: RootSidenavModule,
      providers: [
        {provide: 'config', useValue: config}
      ]
    };
  }
}

@NgModule({
  imports: [
    SidenavModule,
    StoreModule.forFeature('sidenav', reducer, {}),
    EffectsModule.forFeature([SidenavEffects]),
  ],
})

export class RootSidenavModule {
}
