import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingWidgetComponent } from './meeting-widget.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule, MatCheckboxModule, MatIconModule, MatListModule, MatMenuModule, MatRippleModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatMenuModule,
    MatIconModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatButtonModule,
    MatListModule,
    MatRippleModule
  ],
  declarations: [MeetingWidgetComponent],
  exports: [MeetingWidgetComponent]
})
export class MeetingWidgetModule { }
