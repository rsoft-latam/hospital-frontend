// ANGULAR
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// ANGULAR MATERIAL
import {CdkTableModule} from '@angular/cdk/table';
// MODULES
import {NgrGridModule} from 'ngr-grid';
import {SharedLibsModule} from '../../shared/shared-libs.module';
import {ScrollbarModule} from '../../core/scrollbar/scrollbar.module';
import {SharedMaterialModule} from '../../shared/shared-material.module';
import {PageHeaderModule} from '../../core/page-header/page-header.module';
import {BreadcrumbsModule} from '../../core/breadcrumbs/breadcrumbs.module';
// COMPONENTS
import {DoctorComponent} from './doctor.component';
import {DoctorFormComponent} from './doctor-form/doctor-form.component';
import {AlertComponent} from '../../shared/modules/alert/alert.component';
// SERVICES
import {HospitalService} from '../hospital/services/hospital.service';

const routes: Routes = [
  {path: '', component: DoctorComponent}
];

@NgModule({
  imports: [
    SharedLibsModule,
    SharedMaterialModule,
    ScrollbarModule,
    PageHeaderModule,
    BreadcrumbsModule,
    CdkTableModule,
    RouterModule.forChild(routes),
    NgrGridModule
  ],
  declarations: [
    DoctorComponent,
    DoctorFormComponent
  ],
  providers: [
    HospitalService
  ],
  entryComponents: [
    AlertComponent
  ]
})

export class DoctorModule {
}
