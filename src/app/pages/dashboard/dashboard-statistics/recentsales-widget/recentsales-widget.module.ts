import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentsalesWidgetComponent } from './recentsales-widget.component';
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
  declarations: [RecentsalesWidgetComponent],
  exports: [RecentsalesWidgetComponent]
})
export class RecentsalesWidgetModule { }
