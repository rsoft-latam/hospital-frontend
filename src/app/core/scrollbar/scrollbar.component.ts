import { Attribute, Component, ElementRef, Inject, Input, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import Scrollbar from 'smooth-scrollbar';
import { scrollbarOptions } from './scrollbar-options';
import { ScrollbarService } from './scrollbar.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'elastic-scrollbar',
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.scss']
})
export class ScrollbarComponent implements OnInit, OnDestroy {

  static index = 0;

  @Input() name: string;

  scrollbar: Scrollbar;

  constructor(
    private scrollbarService: ScrollbarService,
    private element: ElementRef,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
  }

  ngOnInit() {
    if (!this.name) {
      this.name = String(ScrollbarComponent.index++);
    }

    if (isPlatformBrowser(this.platformId)) {
      this.scrollbar = Scrollbar.init(this.element.nativeElement, scrollbarOptions);
      this.scrollbarService.add(this.name, this.scrollbar, this.element);
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      this.scrollbarService.remove(this.name);
    }
  }
}
