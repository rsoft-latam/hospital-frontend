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
import {NoteComponent} from './note.component';
import {EditButtonComponent} from '../../shared/components/edit-button.component';
import {NoteFormComponent} from './note-form/note-form.component';
import {DoctorService} from '../doctor/store/services/doctor.service';
import {PatientService} from '../patient/store/services/patient.service';

const routes: Routes = [
  {path: '', component: NoteComponent}
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
    NoteComponent,
    NoteFormComponent
  ],
  providers: [
    BrandService,
    SupplierService,
    DoctorService,
    PatientService
  ],
  entryComponents: [
    AlertComponent
  ]
})

export class NoteModule {
}
