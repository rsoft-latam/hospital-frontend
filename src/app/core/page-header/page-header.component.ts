import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'elastic-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  @Input() height: string;
  @Input() background: string;
  @Input() reverse: boolean;
  @Input() reverseDirection: string[];

  reverseDir: boolean[] = [ ];

  get margin() {
    return '-' + this.height;
  }

  constructor() { }

  ngOnInit() {
    this.reverseDir.push(...[false, false, false, false]);

    if (this.reverseDirection) {
      this.reverseDirection.forEach((dir) => {
        switch (dir) {
          case 'top': {
            this.reverseDir[0] = true;
            break
          }
          case 'right': {
            this.reverseDir[1] = true;
            break
          }
          case 'bottom': {
            this.reverseDir[2] = true;
            break
          }
          case 'left': {
            this.reverseDir[3] = true;
            break
          }
        }
      })
    }
  }

}
