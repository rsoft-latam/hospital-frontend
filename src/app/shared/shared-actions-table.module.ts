// ANGULAR
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
// ANGULAR MATERIAL
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
// COMPONENTS
import {ActionButtonComponent} from './components/action-button.component';
import {ActionsButtonPatientComponent} from './components/actions-button-patient.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule
  ],
  declarations: [
    ActionButtonComponent,
    ActionsButtonPatientComponent
  ],
  exports: [
    ActionButtonComponent,
    ActionsButtonPatientComponent
  ]
})

export class SharedActionsTableModule {
  static forRoot() {
    return {
      ngModule: SharedActionsTableModule
    };
  }
}
