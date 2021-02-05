import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateWidgetComponent } from './state-widget.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material';
import { UtilsModule } from '../../../../core/utils/utils.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    UtilsModule
  ],
  declarations: [StateWidgetComponent],
  exports: [StateWidgetComponent]
})
export class StateWidgetModule { }
