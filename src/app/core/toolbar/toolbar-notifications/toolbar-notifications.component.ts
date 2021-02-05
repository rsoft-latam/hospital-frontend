import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { LIST_FADE_ANIMATION } from '../../utils/list.animation';

@Component({
  selector: 'elastic-toolbar-notifications',
  templateUrl: './toolbar-notifications.component.html',
  styleUrls: ['./toolbar-notifications.component.scss'],
  animations: [...LIST_FADE_ANIMATION]
})
export class ToolbarNotificationsComponent implements OnInit {

  isOpen: boolean;
  notifications: any[];
  demoTriggers = 0;

  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.notifications = [
      {
        icon: 'notifications',
        name: 'This is a notification',
        time: 'few sec ago',
        read: false,
        colorClass: ''
      },
      {
        icon: 'shopping_basket',
        name: 'User bought your template',
        time: '23 min ago',
        read: false,
        colorClass: 'primary'
      },
      {
        icon: 'eject',
        name: 'Server Crashed',
        time: 'an hour ago',
        read: false,
        colorClass: 'accent'
      },
      {
        icon: 'cached',
        name: 'New user registered',
        time: '6 hours ago',
        read: true,
        colorClass: ''
      },
      {
        icon: 'code',
        name: 'John added you as friend',
        time: 'yesterday',
        read: true,
        colorClass: ''
      }
    ]
  }

  markAsRead(notification) {
    notification.read = true;
  }

  dismiss(notification) {
    this.notifications.splice(this.notifications.indexOf(notification), 1);
    this.triggerDemoNotification();
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
    this.triggerDemoNotification();
  }

  onClickOutside() {
    this.isOpen = false;
  }

  triggerDemoNotification() {
    if (this.demoTriggers === 0) {
      this.demoTriggers++;

      setTimeout(() => {
        this.notifications.unshift({
          icon: 'cached',
          name: 'New user registered',
          time: moment().fromNow(),
          read: false,
          colorClass: '',
        });

        this.cd.markForCheck();
      }, 2000);
    } else if (this.demoTriggers === 1) {
      this.demoTriggers++;

      setTimeout(() => {
        this.notifications.unshift({
          icon: 'shopping_basket',
          name: 'User bought your template',
          time: '23 min ago',
          read: false,
          colorClass: 'primary'
        });

        this.cd.markForCheck();
      }, 2000);
    }
  }
}
