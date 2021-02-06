import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';

@Component({
  template: `
    <button (click)="invokeParentMethod('edit')"
            style="background: none; border: none; margin: 0px; padding: 0px; cursor: pointer;">
      <mat-icon style="font-size: 20px; margin-right: 5px; margin-top: 3px;">edit</mat-icon>
    </button>
    <button (click)="invokeParentMethod('delete')"
            style="background: none; border: none; margin: 0px; padding: 0px; cursor: pointer; border-left: 1px solid #9F9F9F;">
      <mat-icon style="font-size: 20px; margin-left: 5px; margin-top: 3px;">delete</mat-icon>
    </button>
  `
})
export class ActionButtonComponent implements ICellRendererAngularComp {
  public params: any;

  agInit(params: any): void {
    this.params = params;
  }

  public invokeParentMethod(type: string) {
    this.params.context.componentParent.actionButtonRowTable({row: this.params.node.data, type: type});
  }

  refresh(): boolean {
    return false;
  }
}
