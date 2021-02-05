import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TableFilteringComponent } from './table-filtering.component';

const routes: Routes = [
  {
    path: '',
    component: TableFilteringComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableFilteringRoutingModule { }
