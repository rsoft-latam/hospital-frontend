// ANGULAR
import {BrowserModule} from '@angular/platform-browser';
import {ServiceWorkerModule} from '@angular/service-worker';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule, enableProdMode} from '@angular/core';
// Modules
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {AlertModule} from './shared/modules/alert/alert.module';
import {RouteHandlerModule} from './core/route-handler/route-handler.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// COMPONENTS
import {AppComponent} from './app.component';
// NGRX
import {reducers} from './reducers';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {metaReducers} from './reducers/meta';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {SidenavModule} from './core/sidenav/shared/sidenav.module';
// OTHERS
import {environment} from '../environments/environment';
import {ErrorInterceptor} from './shared/interceptors/error.interceptor';
import {Error504Interceptor} from './shared/interceptors/error-504.interceptor';
import {AppHospitalModule} from './pages/hospital/store/hospital.module';
import {AppAuthModule} from './pages/login/store/auth.module';
import {AppDoctorModule} from './pages/doctor/store/doctor.module';
import {AppPatientModule} from './pages/patient/store/patient.module';
import {AppSpecialtyModule} from './pages/specialty/store/specialty.module';

const NGRX_IMPORTS = [
  StoreModule.forRoot(reducers, {metaReducers}),
  EffectsModule.forRoot([])
];

const MODULES_NGRX_IMPORTS = [
  AppAuthModule.forRoot(environment.auth),
  AppDoctorModule.forRoot(environment.app),
  AppHospitalModule.forRoot(environment.app),
  AppPatientModule.forRoot(environment.app),
  AppSpecialtyModule.forRoot(environment.app),
  SidenavModule.forRoot(environment.app)
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
    HttpClientModule,
    CoreModule,
    RouteHandlerModule,
    !environment.production ? StoreDevtoolsModule.instrument({maxAge: 50}) : [],
    ...MODULES_NGRX_IMPORTS,
    ...NGRX_IMPORTS,

    AlertModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Error504Interceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
