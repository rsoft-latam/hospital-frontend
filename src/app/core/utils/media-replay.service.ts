import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';

@Injectable()
export class MediaReplayService {

  constructor(media: ObservableMedia) {
    media.asObservable()
      .subscribe(res => this._media$.next(res), err => this._media$.error(err), () => this._media$.complete());
  }

  private _media$: ReplaySubject<MediaChange> = new ReplaySubject(1);

  get media$(): Observable<MediaChange> {
    return this._media$.asObservable();
  }

}
