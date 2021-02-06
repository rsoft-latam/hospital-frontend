// ANGULAR
import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';
// NGRX
import {StoreModule} from '@ngrx/store';
import {reducer} from './specialty.reducer';
import {EffectsModule} from '@ngrx/effects';
import {SpecialtyEffects} from './specialty.effects';
// SERVICES
import {SpecialtyService} from './services/specialty.service';
// OTHERS
import {AppConfig} from '../../../shared/models/app-config.model';

@NgModule({
  imports: [CommonModule]
})

export class AppSpecialtyModule {
  static forRoot(config: AppConfig): ModuleWithProviders<any> {
    return {
      ngModule: RootAppSpecialtyModule,
      providers: [
        SpecialtyService,
        {provide: 'config', useValue: config}
      ]
    };
  }
}

@NgModule({
  imports: [
    AppSpecialtyModule,
    StoreModule.forFeature('appHospital', reducer, {}),
    EffectsModule.forFeature([SpecialtyEffects]),
  ],
})

export class RootAppSpecialtyModule {
}
