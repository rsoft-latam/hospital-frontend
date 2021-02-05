import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatSnackBarModule, MatTooltipModule } from '@angular/material';
import { TasksWidgetComponent } from './tasks-widget.component';

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
    MatSnackBarModule
  ],
  declarations: [TasksWidgetComponent],
  exports: [TasksWidgetComponent]
})
export class TasksWidgetModule { }
