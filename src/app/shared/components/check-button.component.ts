import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';

@Component({
  template: `
    <section class="example-section">
      <mat-checkbox class="example-margin" [disabled]="true" [ngModel]="check"></mat-checkbox>
    </section>
  `
})

export class CheckButtonComponent implements ICellRendererAngularComp {
  public params: any;
  public check: boolean;

  agInit(params: any): void {
    this.params = params;
    this.check = this.params.node.data ? this.params.node.data[params.colDef.field] : false;
  }

  refresh(): boolean {
    return false;
  }
}
