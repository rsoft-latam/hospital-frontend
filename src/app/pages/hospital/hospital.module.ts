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
import {HospitalComponent} from './hospital.component';
import {HospitalFormComponent} from './hospital-form/hospital-form.component';
import {ActionButtonComponent} from '../../shared/components/action-button.component';

const routes: Routes = [
  {path: '', component: HospitalComponent}
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
    AgGridModule.withComponents([ActionButtonComponent])
  ],
  declarations: [
    HospitalComponent,
    HospitalFormComponent
  ],
  entryComponents: [
    AlertComponent
  ]
})

export class HospitalModule {
}
