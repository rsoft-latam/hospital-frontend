import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardCRMComponent } from './dashboard-crm.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardCRMComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardCrmRoutingModule { }

