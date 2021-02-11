// ANGULAR
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// ANGULAR MATERIAL
import {CdkTableModule} from '@angular/cdk/table';
// Modules
import {SharedLibsModule} from '../../shared/shared-libs.module';
import {ScrollbarModule} from '../../core/scrollbar/scrollbar.module';
import {PageHeaderModule} from '../../core/page-header/page-header.module';
import {BreadcrumbsModule} from '../../core/breadcrumbs/breadcrumbs.module';
import {SharedMaterialModule} from '../../shared/shared-material.module';
// COMPONENTS
import {AlertComponent} from '../../shared/modules/alert/alert.component';
// OTHERS
import {SpecialtyComponent} from './specialty.component';
import {SpecialtyFormComponent} from './specialty-form/specialty-form.component';
import {DoctorService} from '../doctor/services/doctor.service';
import {NgrGridModule} from 'ngr-grid';

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
