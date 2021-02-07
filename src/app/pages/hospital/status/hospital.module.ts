// ANGULAR
import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';
// NGRX
import {StoreModule} from '@ngrx/store';
import {reducer} from './hospital.reducer';
import {EffectsModule} from '@ngrx/effects';
import {HospitalEffects} from './hospital.effects';
// SERVICES
import {HospitalService} from '../services/hospital.service';
// OTHERS
import {AppConfig} from '../../../shared/models/app-config.model';

@NgModule({
  imports: [CommonModule]
})

export class AppHospitalModule {
  static forRoot(config: AppConfig): ModuleWithProviders<any> {
    return {
      ngModule: RootAppHospitalModule,
      providers: [
        HospitalService,
        {provide: 'config', useValue: config}
      ]
    };
  }
}

@NgModule({
  imports: [
    AppHospitalModule,
    StoreModule.forFeature('appHospital', reducer, {}),
    EffectsModule.forFeature([HospitalEffects]),
  ],
})

export class RootAppHospitalModule {
}
