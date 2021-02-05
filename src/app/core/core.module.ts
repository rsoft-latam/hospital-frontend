import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaReplayService } from './utils/media-replay.service';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule
  ],
  providers: [
    MediaReplayService
  ]
})
export class CoreModule { }
