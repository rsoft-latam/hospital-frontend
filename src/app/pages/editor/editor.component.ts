import { Component, OnInit } from '@angular/core';
import { ROUTE_TRANSITION } from '../../app.animation';

@Component({
  selector: 'elastic-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class EditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
