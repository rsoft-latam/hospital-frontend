// ANGULAR
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// Directives
import {MaskDirective} from './mask.directive';
import {ClickOutsideDirective} from './click-outside.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MaskDirective,
    ClickOutsideDirective
  ],
  exports: [
    MaskDirective,
    ClickOutsideDirective
  ]
})

export class UtilsModule {
}
