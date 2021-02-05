import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material';
import { EditorRoutingModule } from './editor.routing';

@NgModule({
  imports: [
    CommonModule,
    EditorRoutingModule,
    FlexLayoutModule,
    MatIconModule,
  ],
  declarations: [EditorComponent]
})
export class EditorModule { }
