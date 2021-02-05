import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreachartWidgetComponent } from './areachart-widget.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatMenuModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ],
  declarations: [AreachartWidgetComponent],
  exports: [AreachartWidgetComponent]
})
export class AreachartWidgetModule { }
