import { Component } from '@angular/core';
import { MediaReplayService } from './core/utils/media-replay.service';

@Component({
  selector: 'elastic-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //noinspection JSUnusedLocalSymbols
  constructor(
    mediaReplay: MediaReplayService // workaround for Flex-Layout to receive the initial value
  ) {
    // Nothing here.
    // You probably want to go to /core/layout/ :)
  }
}
