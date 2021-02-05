import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsComponent } from './google-maps.component';
import { AgmCoreModule } from '@agm/core';
import { GoogleMapsRoutingModule } from './google-maps.routing';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule,
    GoogleMapsRoutingModule
  ],
  declarations: [GoogleMapsComponent]
})
export class GoogleMapsModule { }
