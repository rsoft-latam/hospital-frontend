// ANGULAR
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
// MODULES
import {LayoutModule} from './layout/layout.module';
// SERVICES
import {MediaReplayService} from './utils/media-replay.service';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [
    MediaReplayService
  ]
})

export class CoreModule {

}
