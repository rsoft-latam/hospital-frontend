import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectWidgetComponent } from './project-widget.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatRippleModule, MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule,
    MatMenuModule,
    MatIconModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatButtonModule,
    MatSnackBarModule,
    MatRippleModule
  ],
  declarations: [ProjectWidgetComponent],
  exports: [ProjectWidgetComponent]
})
export class ProjectWidgetModule { }
