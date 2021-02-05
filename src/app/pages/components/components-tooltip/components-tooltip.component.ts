import { Component, OnInit } from '@angular/core';
import escape from 'lodash-es/escape';

@Component({
  selector: 'elastic-components-tooltip',
  templateUrl: './components-tooltip.component.html'
})
export class ComponentsTooltipComponent implements OnInit {

  tooltipHTML: string = escape(
`<button md-icon-button mdTooltip="Favorite this">
  <md-icon>favorite</md-icon>
</button>`);

  constructor() { }

  ngOnInit() {
  }

}
