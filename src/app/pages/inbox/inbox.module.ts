import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox.component';
import { InboxComposeComponent } from './inbox-compose/inbox-compose.component';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
  MatRippleModule, MatSnackBarModule, MatTooltipModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollbarModule } from '../../core/scrollbar/scrollbar.module';
import { InboxRoutingModule } from './inbox.routing';

@NgModule({
  imports: [
    CommonModule,
    InboxRoutingModule,
    FlexLayoutModule,
    ScrollbarModule,
    FormsModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCheckboxModule,
    MatRippleModule,
    MatDialogModule,
    MatInputModule,
    MatMenuModule,
    MatSnackBarModule,
    MatTooltipModule
  ],
  entryComponents: [InboxComposeComponent],
  declarations: [InboxComponent, InboxComposeComponent]
})
export class InboxModule { }
