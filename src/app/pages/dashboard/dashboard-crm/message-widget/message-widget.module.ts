import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageWidgetComponent } from './message-widget.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
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
  declarations: [MessageWidgetComponent],
  exports: [MessageWidgetComponent]
})
export class MessageWidgetModule { }
