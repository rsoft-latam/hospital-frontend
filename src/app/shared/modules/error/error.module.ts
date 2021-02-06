import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorComponent} from './error.component';
import {SharedMaterialModule} from '../../shared-material.module';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  declarations: [ErrorComponent],
  exports: [ErrorComponent]
})
export class ErrorModule {
}
