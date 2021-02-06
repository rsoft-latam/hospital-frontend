// ANGULAR
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
// ANGULAR MATERIAL
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
// COMPONENTS
import {EditButtonComponent} from './components/edit-button.component';
import {CheckButtonComponent} from './components/check-button.component';
import {ActionButtonComponent} from './components/action-button.component';
import {SeverityButtonComponent} from './components/severity-button.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule
  ],
  declarations: [
    ActionButtonComponent,
    CheckButtonComponent,
    SeverityButtonComponent,
    EditButtonComponent
  ],
  exports: [
    ActionButtonComponent,
    CheckButtonComponent,
    SeverityButtonComponent,
    EditButtonComponent
  ]
})

export class SharedActionsTableModule {
  static forRoot() {
    return {
      ngModule: SharedActionsTableModule
    };
  }
}
