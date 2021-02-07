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
import {SharedActionsTableModule} from '../../shared/shared-actions-table.module';
// COMPONENTS
import {AlertComponent} from '../../shared/modules/alert/alert.component';
// OTHERS
import {PatientComponent} from './patient.component';
import {PatientFormComponent} from './patient-form/patient-form.component';
import {InformationModule} from '../../shared/modules/information/information.module';
import {InformationComponent} from '../../shared/modules/information/information.component';
import {ActionButtonComponent} from '../../shared/components/action-button.component';

const routes: Routes = [
  {path: '', component: PatientComponent}
];

@NgModule({
  imports: [
    SharedLibsModule,
    SharedMaterialModule,
    SharedActionsTableModule,
    ScrollbarModule,
    PageHeaderModule,
    BreadcrumbsModule,
    CdkTableModule,
    RouterModule.forChild(routes),
    InformationModule,
    AgGridModule.withComponents([ActionButtonComponent])
  ],
  declarations: [
    PatientComponent,
    PatientFormComponent
  ],
  entryComponents: [
    AlertComponent,
    InformationComponent
  ]
})

export class PatientModule {
}
