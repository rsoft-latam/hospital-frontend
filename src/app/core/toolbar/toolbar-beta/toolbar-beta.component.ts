import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'elastic-toolbar-beta',
  templateUrl: './toolbar-beta.component.html',
  styleUrls: ['./toolbar-beta.component.scss']
})
export class ToolbarBetaComponent implements OnInit {

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
