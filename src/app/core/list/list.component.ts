import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { ListColumn } from './list-column.model';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'elastic-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {

  @Input() name: string;
  @Input() columns: ListColumn[];

  @ViewChild('filter') filter: ElementRef;
  @Output() filterChange = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {

    fromEvent(this.filter.nativeElement, 'keyup').pipe(
      distinctUntilChanged(),
      debounceTime(150)
    ).subscribe(() => this.filterChange.emit(this.filter.nativeElement.value));
  }

  toggleColumnVisibility(column, event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }
}
