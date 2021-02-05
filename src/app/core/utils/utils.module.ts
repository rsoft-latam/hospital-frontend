import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from './click-outside.directive';
import { CountUpDirective } from './count-up.directive';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ClickOutsideDirective,
    CountUpDirective,
    HighlightDirective
  ],
  exports: [
    ClickOutsideDirective,
    CountUpDirective,
    HighlightDirective
  ]
})
export class UtilsModule { }
