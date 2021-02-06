import {Directive, ElementRef, Inject, Input, NgZone, Optional, ViewContainerRef} from '@angular/core';

import {Overlay, ScrollDispatcher} from '@angular/cdk/overlay';
import {Platform} from '@angular/cdk/platform';
import {AriaDescriber, FocusMonitor} from '@angular/cdk/a11y';
import {Directionality} from '@angular/cdk/bidi';
import {MAT_TOOLTIP_DEFAULT_OPTIONS, MAT_TOOLTIP_SCROLL_STRATEGY, MatTooltip, MatTooltipDefaultOptions} from '@angular/material/tooltip';

@Directive({
  selector: '[tooltip]',
  exportAs: 'tooltip'
})

export class TooltipDirective extends MatTooltip {

  @Input()
  get tooltip() {
    return this.message;
  }

  set tooltip(value: any) {
    let aux = '';
    if (value) {
      (Object.values(value)).map(item => aux = aux + ' ' + item);
    }
    this.message = aux;
  }

  constructor(
    _overlay: Overlay,
    _elementRef: ElementRef,
    _scrollDispatcher: ScrollDispatcher,
    _viewContainerRef: ViewContainerRef,
    _ngZone: NgZone,
    _platform: Platform,
    _ariaDescriber: AriaDescriber,
    _focusMonitor: FocusMonitor,
    @Inject(MAT_TOOLTIP_SCROLL_STRATEGY) _scrollStrategy: any,
    @Optional() _dir: Directionality,
    @Optional() @Inject(MAT_TOOLTIP_DEFAULT_OPTIONS) _defaultOptions: MatTooltipDefaultOptions) {
    super(
      _overlay,
      _elementRef,
      _scrollDispatcher,
      _viewContainerRef,
      _ngZone,
      _platform,
      _ariaDescriber,
      _focusMonitor,
      _scrollStrategy,
      _dir,
      _defaultOptions
    );
  }
}
