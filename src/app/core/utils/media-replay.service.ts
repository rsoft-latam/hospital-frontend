import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import {MediaChange, MediaObserver} from '@angular/flex-layout';

@Injectable()
export class MediaReplayService {

  constructor(media: MediaObserver) {
    media.media$.subscribe(res => this._media$.next(res), err => this._media$.error(err), () => this._media$.complete());
  }

  private _media$: ReplaySubject<MediaChange> = new ReplaySubject(1);

  get media$(): Observable<MediaChange> {
    return this._media$.asObservable();
  }

}
