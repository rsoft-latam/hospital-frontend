import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';

@Component({
  template: `
    <div style="display: flex; flex-direction: row; width 100%; height: 100%; justify-content: center; align-items: center;">
      <button (click)="invokeParentMethod('edit')"
              style="background: none; border: none; margin: 0; padding: 0; cursor: pointer; width: 100%; height: 100%;">
        <mat-icon style="font-size: 20px; margin-right: 5px; margin-top: 3px;">edit</mat-icon>
      </button>
      <button (click)="invokeParentMethod('delete')"
              style="background: none; border: none; margin: 0; padding: 0; cursor: pointer; width: 100%; height: 100%;">
        <mat-icon style="font-size: 20px; margin-right: 5px; margin-top: 3px;">delete</mat-icon>
      </button>
    </div>
  `
})
export class EditButtonComponent implements ICellRendererAngularComp {
  public params: any;

  agInit(params: any): void {
    this.params = params;
  }

  public invokeParentMethod(type: string): void {
    this.params.context.componentParent.actionButtonRowTable({row: this.params.node.data, type: type});
  }

  refresh(): boolean {
    return false;
  }
}
