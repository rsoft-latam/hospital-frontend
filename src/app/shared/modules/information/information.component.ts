import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';

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
      <mat-paginator [length]="total"
                     [pageSize]="filter?.size"
                     [pageSizeOptions]="pageSizeOptions"
                     (page)="onPagination($event)">
      </mat-paginator>
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
  public paginationNumberFormatter;
  public defaultColDef;

  total = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  filter: any;

  constructor(public dialogRef: MatDialogRef<InformationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {

    // AG-GRID CONFIG
    this.filter = this.data.filter;
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
    this.data.service[this.data.method](this.data.filter).subscribe(data => {
      this.total = parseFloat(data.headers.get('X-Total-Count'));
      this.gridApi.setRowData(data.body);
    });
  }

  onPagination(event: PageEvent): void {
    this.data.service[this.data.method]({
      ...this.filter,
      size: event.pageSize,
      page: event.pageIndex
    }).subscribe(data => {
      this.total = parseFloat(data.headers.get('X-Total-Count'));
      this.gridApi.setRowData(data.body);
    });
  }

}
