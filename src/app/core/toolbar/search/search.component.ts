import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatFormField } from '@angular/material';

@Component({
  selector: 'elastic-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  isOpen: boolean;

  @ViewChild('input', { read: ElementRef }) input: ElementRef;

  constructor() { }

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
