import { AfterViewInit, Directive, ElementRef, Inject, NgZone, PLATFORM_ID } from '@angular/core';

import hljs from 'highlight.js/lib/highlight.js'
import typescript from 'highlight.js/lib/languages/typescript.js';
import xml from 'highlight.js/lib/languages/xml.js';
import { isPlatformBrowser } from '@angular/common'; // XML includes HTML syntax



@Directive({
  selector: '[vrHighlight]'
})
export class HighlightDirective implements AfterViewInit {

  constructor(private elementRef: ElementRef, private zone: NgZone, @Inject(PLATFORM_ID) private platformId: any) {
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        hljs.registerLanguage('typescript', typescript);
        hljs.registerLanguage('xml', xml);
        hljs.highlightBlock(this.elementRef.nativeElement);
      });
    }
  }

}
