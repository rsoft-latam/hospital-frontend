// ANGULAR
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// Modules
import {FlexLayoutModule} from '@angular/flex-layout';
import {AlertModule} from './modules/alert/alert.module';
import {ErrorModule} from './modules/error/error.module';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
    ErrorModule,
    FlexLayoutModule
  ]
})

export class SharedLibsModule {
  static forRoot() {
    return {
      ngModule: SharedLibsModule
    };
  }
}
