import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'elastic-breadcrumbs',
  template: `
    <div class="breadcrumbs" [ngClass]="header" [class.padding-top]="header">
      <div class="title">{{ currentPage }}</div>
      <div class="crumbs" fxLayout="row" fxLayoutAlign="start center">
        <a href="javascript:void(0)" class="crumb home">Home</a>
        <div class="crumb" *ngFor="let name of names; let i = index" fxLayout="row" fxLayoutAlign="start center">
          <mat-icon class="chevron">chevron_right</mat-icon>
          <a class="link" [routerLink]="routes[i]">{{ name }}</a>
        </div>
        <div class="crumb" fxLayout="row" fxLayoutAlign="start center">
          <mat-icon class="chevron">chevron_right</mat-icon>
          <div class="link">{{ currentPage }}</div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  @Input() currentPage: string;
  @Input() names: string[] = [];
  @Input() routes: string[] = [];
  @Input() header;

  constructor() {
  }

  ngOnInit() {
  }
}
