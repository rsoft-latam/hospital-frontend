import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';

@Component({
  template: `
    <section class="example-section">
      <mat-icon *ngIf="severity === false">check</mat-icon>
      <mat-icon *ngIf="severity === true">info</mat-icon>
    </section>
  `
})
export class SeverityButtonComponent implements ICellRendererAngularComp {
  public params: any;
  public severity: boolean;

  agInit(params: any): void {
    this.params = params;
    this.severity = this.params.node.data ? (this.params.node.data.ActionRequired ? true : false) : false;
  }

  refresh(): boolean {
    return false;
  }
}
