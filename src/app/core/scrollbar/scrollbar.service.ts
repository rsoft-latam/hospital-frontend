import { ElementRef, Injectable } from '@angular/core';
import Scrollbar from 'smooth-scrollbar';

@Injectable()
export class ScrollbarService {

  scrollbars: { [name: string]: { scrollbar: Scrollbar, element: any } };

  constructor() { }

  add(name: string, scrollbar: Scrollbar, element: ElementRef) {
    if (!this.scrollbars) {
      this.scrollbars = { };
    }

    this.scrollbars[name] = {
      scrollbar: scrollbar,
      element: element
    };
  }

  remove(name: string) {
    delete this.scrollbars[name];
  }

  get(name: string) {
    return this.scrollbars[name];
  }
}
