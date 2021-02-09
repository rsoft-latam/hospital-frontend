import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'ngr-grid',
  templateUrl: './ngr-grid.component.html',
  styleUrls: ['/ngr-grid.component.scss']
})

export class NgrGridComponent implements OnInit {

  // AG-GRID CONFIG
  private gridApi;
  private gridColumnApi;
  @Input() gridOptions;

  @Input() totalRows = 0;
  @Input() pageSizeOptions: number[] = [5, 10, 25, 100];
  @Input() pageSize: number;

  @Output() onAdd = new EventEmitter<any>();
  @Output() onPage = new EventEmitter<any>();
  @Output() onGridReady = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {

  }

  gridReady(params): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.onGridReady.emit(params);
  }

  page(event: PageEvent): void {
    this.onPage.emit(event);
  }

  add(): void {
    this.onAdd.emit();
  }

}
