import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarchartWidgetComponent } from './barchart-widget.component';
import { MatButtonModule, MatIconModule, MatMenuModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ],
  declarations: [BarchartWidgetComponent],
  exports: [BarchartWidgetComponent]
})
export class BarchartWidgetModule { }
