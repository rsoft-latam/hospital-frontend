import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'elastic-search',
  template: `
    <div class="toolbar-button" fxLayout="row" fxLayoutAlign="center stretch" style="height: 100%;">
      <button class="icon-button" mat-button (click)="open()">
        <mat-icon>search</mat-icon>
      </button>
      <mat-form-field #input class="search" [class.search-open]="isOpen">
        <input (blur)="close()" matInput placeholder="Search...">
      </mat-form-field>
    </div>
  `,
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  isOpen: boolean;

  @ViewChild('input', {static: false, read: ElementRef}) input: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  open() {
    this.isOpen = true;

    setTimeout(() => {
      this.input.nativeElement.focus();
    }, 100);

  }

  close() {
    this.isOpen = false;
  }

}
