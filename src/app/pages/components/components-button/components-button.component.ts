import { Component, OnInit } from '@angular/core';
import escape from 'lodash-es/escape';

@Component({
  selector: 'elastic-components-button',
  templateUrl: './components-button.component.html'
})
export class ComponentsButtonComponent implements OnInit {

  flatButtonsHTML: string = escape(`
  <md-card>
    <md-card-content fxLayout="column" fxLayout.gt-sm="row" fxLayoutAlign="space-around center">
      <button md-button>Button</button>
      <button md-button color="primary">Primary</button>
      <button md-button color="accent">Accent</button>
      <button md-button color="warn">Warn</button>
      <button md-button disabled="true">Disabled</button>
    </md-card-content>
  </md-card>
  `);

  raisedButtonsHTML: string = escape(`
  <md-card>
    <md-card-content fxLayout="column" fxLayout.gt-sm="row" fxLayoutAlign="space-around center">
      <button md-raised-button>Button</button>
      <button md-raised-button color="primary">Primary</button>
      <button md-raised-button color="accent">Accent</button>
      <button md-raised-button color="warn">Warn</button>
      <button md-raised-button disabled="true">Disabled</button>
    </md-card-content>
  </md-card>
  `);

  fabHTML: string = escape(`
  <md-card>
    <md-card-content fxLayout="column" fxLayout.gt-sm="row" fxLayoutAlign="space-around center">
      <button md-fab color="primary"><md-icon>grade</md-icon></button>
      <button md-fab color="accent"><md-icon>favorite</md-icon></button>
      <button md-fab color="warn"><md-icon>build</md-icon></button>
      <button md-fab disabled="true"><md-icon>lock</md-icon></button>
      <button md-mini-fab color="primary"><md-icon>favorite</md-icon></button>
      <button md-mini-fab color="accent"><md-icon>thumb_up</md-icon></button>
      <button md-mini-fab color="warn"><md-icon>build</md-icon></button>
      <button md-mini-fab disabled="true"><md-icon>lock</md-icon></button>
    </md-card-content>
  </md-card>
  `);

  buttonToggleHTML: string = escape(`
  <md-card>
    <md-card-content fxLayout="column" fxLayout.gt-sm="row" fxLayoutAlign="space-around center">
      <md-button-toggle-group [name]="'alignment'">
        <md-button-toggle value="left"><md-icon>format_align_left</md-icon></md-button-toggle>
        <md-button-toggle value="center"><md-icon>format_align_center</md-icon></md-button-toggle>
        <md-button-toggle value="right"><md-icon>format_align_right</md-icon></md-button-toggle>
        <md-button-toggle value="justify"><md-icon>format_align_justify</md-icon></md-button-toggle>
      </md-button-toggle-group>
      <md-button-toggle-group multiple>
        <md-button-toggle>Flour</md-button-toggle>
        <md-button-toggle>Eggs</md-button-toggle>
        <md-button-toggle>Sugar</md-button-toggle>
        <md-button-toggle>Milk</md-button-toggle>
      </md-button-toggle-group>
    </md-card-content>
  </md-card>
  `);

  iconButtonHTML: string = escape(`
  <md-card>
    <md-card-content fxLayout="column" fxLayout.gt-sm="row" fxLayoutAlign="space-around center">
      <button md-icon-button><md-icon>menu</md-icon></button>
      <button md-icon-button color="primary"><md-icon>grade</md-icon></button>
      <button md-icon-button color="accent"><md-icon>favorite</md-icon></button>
      <button md-icon-button color="warn"><md-icon>build</md-icon></button>
      <button md-icon-button disabled="true"><md-icon>lock</md-icon></button>
    </md-card-content>
  </md-card>
  `);

  constructor() { }

  ngOnInit() {
  }

}
