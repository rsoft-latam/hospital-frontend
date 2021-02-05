import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'elastic-toolbar-gamma',
  templateUrl: './toolbar-gamma.component.html',
  styleUrls: ['./toolbar-gamma.component.scss']
})
export class ToolbarGammaComponent implements OnInit {

  @Input() quickpanelOpen: boolean;

  @Output() toggledSidenav = new EventEmitter();
  @Output() toggledQuickpanel = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  toggleSidenav() {
    this.toggledSidenav.emit();
  }

  toggleQuickpanel() {
    this.toggledQuickpanel.emit();
  }
}
