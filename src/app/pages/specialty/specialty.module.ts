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
import {SpecialtyComponent} from './specialty.component';
import {AlertComponent} from '../../shared/modules/alert/alert.component';
import {SpecialtyFormComponent} from './specialty-form/specialty-form.component';
// SERVICES
import {DoctorService} from '../doctor/services/doctor.service';

const routes: Routes = [
  {path: '', component: SpecialtyComponent}
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
    SpecialtyComponent,
    SpecialtyFormComponent
  ],
  providers: [
    DoctorService
  ],
  entryComponents: [
    AlertComponent
  ]
})

export class SpecialtyModule {
}
