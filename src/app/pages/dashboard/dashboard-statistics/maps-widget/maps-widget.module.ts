import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsWidgetComponent } from './maps-widget.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule
  ],
  declarations: [MapsWidgetComponent],
  exports: [MapsWidgetComponent]
})
export class MapsWidgetModule { }
