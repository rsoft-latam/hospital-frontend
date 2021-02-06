import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'elastic-page-header',
  template: `
    <div class="page-header"
         [style.background-image]="background"
         [style.height]="height"
         [class.reverse-padding]="reverse"
         [class.reverse-padding-top]="reverseDir[0]"
         [class.reverse-padding-right]="reverseDir[1]"
         [class.reverse-padding-bottom]="reverseDir[2]"
         [class.reverse-padding-left]="reverseDir[3]"
         [style.margin-bottom]="margin"></div>
  `,
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  @Input() height: string;
  @Input() background: string;
  @Input() reverse: boolean;
  @Input() reverseDirection: string[];

  reverseDir: boolean[] = [];

  get margin() {
    return '-' + this.height;
  }

  constructor() {
  }

  ngOnInit() {
    this.reverseDir.push(...[false, false, false, false]);

    if (this.reverseDirection) {
      this.reverseDirection.forEach((dir) => {
        switch (dir) {
          case 'top': {
            this.reverseDir[0] = true;
            break;
          }
          case 'right': {
            this.reverseDir[1] = true;
            break;
          }
          case 'bottom': {
            this.reverseDir[2] = true;
            break;
          }
          case 'left': {
            this.reverseDir[3] = true;
            break;
          }
        }
      });
    }
  }

}
