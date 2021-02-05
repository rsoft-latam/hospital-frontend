import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'elastic-toolbar-alpha',
  templateUrl: './toolbar-alpha.component.html',
  styleUrls: ['./toolbar-alpha.component.scss']
})
export class ToolbarAlphaComponent implements OnInit {

  @Input() sidenavCollapsed: boolean;
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
