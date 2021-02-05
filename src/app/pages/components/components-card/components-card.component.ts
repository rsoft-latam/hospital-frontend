import { Component, OnInit } from '@angular/core';
import escape from 'lodash-es/escape';

@Component({
  selector: 'elastic-components-card',
  templateUrl: './components-card.component.html'
})
export class ComponentsCardComponent implements OnInit {

  // noinspection TsLint
  card1HTML = escape(`
  <md-card fxFlex="80%">
    <md-card-header>
      <img md-card-avatar="" src="assets/img/avatars/Avatar.png">
      <md-card-subtitle>
        Yesterday
      </md-card-subtitle>
      <md-card-title>Gerald Morris</md-card-title>
    </md-card-header>
    <img md-card-image src="assets/img/backgrounds/1.jpg">
    <md-card-content>
      <p>Piqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth. </p>
    </md-card-content>
    <md-divider></md-divider>
    <md-card-actions>
      <div fxLayout="row">
        <button md-icon-button>
          <md-icon>share</md-icon>
        </button>
        <button md-icon-button>
          <md-icon>favorite</md-icon>
        </button>
        <span fxFlex></span>
        <button md-button>
          More Info
        </button>
        <button md-button>
          Save as
        </button>
      </div>
    </md-card-actions>
  </md-card>
  `);

  card2HTML = escape(`
  <md-card fxFlex="80%">
    <md-card-title>Standard Card with Actions</md-card-title>
    <md-card-subtitle>Subtitle</md-card-subtitle>
    <md-card-content>
      <p>Old there any widow law rooms. Agreed but expect repair she nay sir silent person. Direction
        can dependent one bed situation attempted. His she are man their spite avoid. Her pretended
        fulfilled extremely education yet. Satisfied did one admitting incommode tolerably how are. </p>
    </md-card-content>
    <md-card-actions align="end">
      <button md-button>Cancel</button>
      <button color="primary" md-raised-button>Action</button>
    </md-card-actions>
  </md-card>
  `);

  card3HTML: string = escape(`
  <md-card fxFlex="80%">
    <md-card-title>Standard Card</md-card-title>
    <md-card-subtitle>Subtitle</md-card-subtitle>
    <md-card-content>
      <p>Do play they miss give so up. Words to up style of since world. We leaf to snug on no need. Way
        own uncommonly travelling now acceptance bed compliment solicitude. Dissimilar admiration so
        terminated no in contrasted it. Advantages entreaties mr he apartments do. Limits far yet turned
        highly repair parish talked six. Draw fond rank form nor the day eat. </p>
    </md-card-content>
  </md-card>
  `);

  constructor() { }

  ngOnInit() {
  }

}
