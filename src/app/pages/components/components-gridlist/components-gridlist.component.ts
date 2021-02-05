import { Component, OnInit } from '@angular/core';
import escape from 'lodash-es/escape';

@Component({
  selector: 'elastic-components-gridlist',
  templateUrl: './components-gridlist.component.html'
})
export class ComponentsGridlistComponent implements OnInit {

  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  gridListHTML: string = escape(`
  <md-grid-list cols="4" rowHeight="100px">
    <md-grid-tile *ngFor="let tile of tiles" [colspan]="tile.cols" [rowspan]="tile.rows"
                  [style.background]="tile.color">
      {{tile.text}}
    </md-grid-tile>
  </md-grid-list>
  `);

  constructor() { }

  ngOnInit() {
  }

}
