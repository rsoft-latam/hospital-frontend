import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'elastic-message-widget',
  templateUrl: './message-widget.component.html',
  styleUrls: ['./message-widget.component.scss']
})
export class MessageWidgetComponent implements OnInit {

  messages: any[];

  constructor() { }

  ngOnInit() {
    this.messages = [
      {
        image: 'assets/img/demo/avatars/1.png',
        from: 'Jonah Muisel',
        message: 'Are you still interested in a golf weekend? I\'ll do one next week, join us if you want.',
        online: true
      },
      {
        image: 'assets/img/demo/avatars/2.png',
        from: 'Conner Oreilly',
        message: 'Love your newest theme, so clean and slick! And all the options! Wow!',
        online: true
      },
      {
        image: 'assets/img/demo/avatars/3.png',
        from: 'Zac Husein',
        message: 'Don\'t forget to update to the latest version of npm, you could miss out on features!',
        online: false
      },
      {
        image: 'assets/img/demo/avatars/4.png',
        from: 'Jenniffer Litt',
        message: 'Last weekend was great, could we do this again? I\'d LOVE to see you again. xoxo',
        online: false
      }
    ]
  }

}
