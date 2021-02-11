// ANGULAR
import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';
// NGRX
import {StoreModule} from '@ngrx/store';
import {reducer} from './doctor.reducer';
import {EffectsModule} from '@ngrx/effects';
import {DoctorEffects} from './doctor.effects';
// SERVICES
import {DoctorService} from '../services/doctor.service';
// OTHERS
import {AppConfig} from '../../../shared/models/app-config.model';

@NgModule({
  imports: [CommonModule]
})

export class AppDoctorModule {
  static forRoot(config: AppConfig): ModuleWithProviders<any> {
    return {
      ngModule: RootAppDoctorModule,
      providers: [
        DoctorService,
        {provide: 'config', useValue: config}
      ]
    };
  }
}

@NgModule({
  imports: [
    AppDoctorModule,
    StoreModule.forFeature('appDoctor', reducer, {}),
    EffectsModule.forFeature([DoctorEffects]),
  ],
})

export class RootAppDoctorModule {
}
