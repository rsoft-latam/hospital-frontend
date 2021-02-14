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
import {NoteComponent} from './note.component';
import {NoteFormComponent} from './note-form/note-form.component';
import {AlertComponent} from '../../shared/modules/alert/alert.component';
// SERVICES
import {DoctorService} from '../doctor/services/doctor.service';
import {PatientService} from '../patient/services/patient.service';

const routes: Routes = [
  {path: '', component: NoteComponent}
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
    NoteComponent,
    NoteFormComponent
  ],
  providers: [
    DoctorService,
    PatientService
  ],
  entryComponents: [
    AlertComponent
  ]
})

export class NoteModule {
}
