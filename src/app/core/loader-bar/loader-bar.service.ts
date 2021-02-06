import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

class LoaderBarState {
  show: boolean;
}

@Injectable()
export class LoaderBarService {

  private loaderSubject = new Subject<LoaderBarState>();
  loaderState = this.loaderSubject.asObservable();

  constructor() {
  }

  show() {
    this.loaderSubject.next(<LoaderBarState>{show: true});
  }

  hide() {
    this.loaderSubject.next(<LoaderBarState>{show: false});
  }
}
