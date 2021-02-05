import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DatatableComponent } from './datatable.component';

const routes: Routes = [
  {
    path: '',
    component: DatatableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatatableRoutingModule { }
