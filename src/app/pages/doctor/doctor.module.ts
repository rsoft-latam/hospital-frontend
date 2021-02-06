// ANGULAR
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// ANGULAR MATERIAL
import {CdkTableModule} from '@angular/cdk/table';
// AG-GRID
import {AgGridModule} from 'ag-grid-angular';
// Modules
import {SharedLibsModule} from '../../shared/shared-libs.module';
import {ScrollbarModule} from '../../core/scrollbar/scrollbar.module';
import {PageHeaderModule} from '../../core/page-header/page-header.module';
import {BreadcrumbsModule} from '../../core/breadcrumbs/breadcrumbs.module';
import {SharedMaterialModule} from '../../shared/shared-material.module';
import {ValidationModule} from '../../core/validated-input/validation.module';
import {SharedActionsTableModule} from '../../shared/shared-actions-table.module';
import {FileUploadModule} from '../../shared/modules/file-upload/file-upload.module';
// COMPONENTS
import {AlertComponent} from '../../shared/modules/alert/alert.component';
// SERVICES
import {BrandService} from '../../shared/services/brand.service';
import {SupplierService} from '../../shared/services/supplier.service';
// OTHERS
import {DoctorComponent} from './doctor.component';
import {EditButtonComponent} from '../../shared/components/edit-button.component';
import {DoctorFormComponent} from './doctor-form/doctor-form.component';
import {HospitalService} from '../hospital/store/services/hospital.service';

const routes: Routes = [
  {path: '', component: DoctorComponent}
];

@NgModule({
  imports: [
    SharedLibsModule,
    SharedMaterialModule,
    SharedActionsTableModule,
    FileUploadModule,
    ScrollbarModule,
    PageHeaderModule,
    BreadcrumbsModule,
    ValidationModule,
    CdkTableModule,
    RouterModule.forChild(routes),
    AgGridModule.withComponents([EditButtonComponent])
  ],
  declarations: [
    DoctorComponent,
    DoctorFormComponent
  ],
  providers: [
    BrandService,
    SupplierService,
    HospitalService
  ],
  entryComponents: [
    AlertComponent
  ]
})

export class DoctorModule {
}
