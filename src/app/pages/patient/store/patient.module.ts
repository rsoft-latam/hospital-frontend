// ANGULAR
import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';
// NGRX
import {StoreModule} from '@ngrx/store';
import {reducer} from './patient.reducer';
import {EffectsModule} from '@ngrx/effects';
import {PatientEffects} from './patient.effects';
// SERVICES
import {PatientService} from './services/patient.service';
// OTHERS
import {AppConfig} from '../../../shared/models/app-config.model';

@NgModule({
  imports: [CommonModule]
})

export class AppPatientModule {
  static forRoot(config: AppConfig): ModuleWithProviders<any> {
    return {
      ngModule: RootAppPatientModule,
      providers: [
        PatientService,
        {provide: 'config', useValue: config}
      ]
    };
  }
}

@NgModule({
  imports: [
    AppPatientModule,
    StoreModule.forFeature('appPatient', reducer, {}),
    EffectsModule.forFeature([PatientEffects]),
  ],
})

export class RootAppPatientModule {
}
