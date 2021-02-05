import { RouterModule, Routes } from '@angular/router';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';
import { NgModule } from '@angular/core';

// Final URL is /forms/form-elements (inherited from lazy loaded route in app-routing.module.ts)
const routes: Routes = [
  {
    path: 'form-elements',
    component: FormElementsComponent
  },
  {
    path: 'form-wizard',
    component: FormWizardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
