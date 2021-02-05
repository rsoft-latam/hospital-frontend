import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TableSortingComponent } from './table-sorting.component';

const routes: Routes = [
  {
    path: '',
    component: TableSortingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableSortingRoutingModule { }
