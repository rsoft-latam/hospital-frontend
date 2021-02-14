// ANGULAR
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ServiceWorkerModule} from '@angular/service-worker';
// NGRX
import {reducers} from './reducers';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {metaReducers} from './reducers/meta';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
// MODULES
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {SidenavModule} from './core/sidenav/shared/sidenav.module';
import {RouteHandlerModule} from './core/route-handler/route-handler.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// STATES MODULES
import {AppAuthModule} from 'ngr-auth';
import {AppNoteModule} from './pages/note/+state/note.module';
import {AppDoctorModule} from './pages/doctor/+state/doctor.module';
import {AppPatientModule} from './pages/patient/+state/patient.module';
import {AppHospitalModule} from './pages/hospital/+state/hospital.module';
import {AppSpecialtyModule} from './pages/specialty/+state/specialty.module';
// COMPONENTS
import {AppComponent} from './app.component';
// OTHERS
import {environment} from '../environments/environment';

const NGRX_IMPORTS = [
  StoreModule.forRoot(reducers, {metaReducers}),
  EffectsModule.forRoot([])
];

const MODULES_NGRX_IMPORTS = [
  AppAuthModule.forRoot(environment.auth),
  AppDoctorModule.forRoot(environment.app),
  AppPatientModule.forRoot(environment.app),
  AppSpecialtyModule.forRoot(environment.app),
  AppNoteModule.forRoot(environment.app),
  SidenavModule.forRoot(environment.app),
  AppHospitalModule.forRoot(environment.app)
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    RouteHandlerModule,
    !environment.production ? StoreDevtoolsModule.instrument({maxAge: 50}) : [],
    ...MODULES_NGRX_IMPORTS,
    ...NGRX_IMPORTS
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
