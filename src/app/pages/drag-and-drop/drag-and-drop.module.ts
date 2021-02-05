import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragAndDropComponent } from './drag-and-drop.component';
import { SortablejsModule } from 'angular-sortablejs';
import { MatIconModule, MatListModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragAndDropRoutingModule } from './drag-and-drop.routing';

@NgModule({
  imports: [
    CommonModule,
    SortablejsModule,
    MatIconModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,

    DragAndDropRoutingModule
  ],
  declarations: [DragAndDropComponent]
})
export class DragAndDropModule { }
