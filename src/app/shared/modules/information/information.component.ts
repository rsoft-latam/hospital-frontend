import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  template: `
    <div style="width: 1000px; height: 500px;">
      <ag-grid-angular
        style="width: 100%; height: 100%;"
        class="ag-theme-material"
        [columnDefs]="columnDefs"
        [rowSelection]="rowSelection"
        [rowGroupPanelShow]="rowGroupPanelShow"
        [pivotPanelShow]="pivotPanelShow"
        [defaultColDef]="defaultColDef"
        (gridReady)="onGridReady($event)">
      </ag-grid-angular>
    </div>
  `
})
export class InformationComponent implements OnInit {

  // AG-GRID CONFIG
  private gridApi;
  private gridColumnApi;
  public columnDefs;
  public autoGroupColumnDef;
  public rowSelection;
  public rowGroupPanelShow;
  public pivotPanelShow;
  public paginationPageSize;
  public paginationNumberFormatter;
  public defaultColDef;

  constructor(public dialogRef: MatDialogRef<InformationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {

    // AG-GRID CONFIG
    this.columnDefs = this.data.columnDefs;

    this.defaultColDef = {
      editable: false,
      enableRowGroup: true,
      suppressSizeToFit: true,
      enablePivot: true,
      enableValue: true,
      sortable: true,
      resizable: true
    };


    if (this.data.errorArrayFields) {
      this.data.errorArrayFields = Object.entries(this.data.errorArrayFields);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onGridReady(params): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
    this.data.service.list(this.data.initFilter).subscribe(res => {
      this.gridApi.setRowData(res.body);
    });
    //this.store.dispatch(new hospitalActions.SetFilter({filter: initFilter}));
  }

}
