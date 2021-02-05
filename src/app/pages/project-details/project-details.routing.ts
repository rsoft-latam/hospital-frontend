import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailsComponent } from './project-details.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ProjectDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectDetailsRoutingModule { }
