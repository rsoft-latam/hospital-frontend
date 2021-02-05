import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ScrollbarComponent } from '../../core/scrollbar/scrollbar.component';
import { ROUTE_TRANSITION } from '../../app.animation';
import * as moment from 'moment';
import sortBy from 'lodash-es/sortBy';
import { chatDemoData } from './chat.demo';
import { ScrollbarService } from '../../core/scrollbar/scrollbar.service';
import Scrollbar from 'smooth-scrollbar';
import { MediaReplayService } from '../../core/utils/media-replay.service';
import { MediaChange } from '@angular/flex-layout';
import { componentDestroyed } from '../../core/utils/component-destroyed';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'elastic-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class ChatComponent implements OnInit, OnDestroy {

  scrollbar: Scrollbar;

  drawerOpen = true;
  drawerMode = 'side';
  drawerDisableClose = true;

  chats: any[];
  activeChat: any;
  newMessage: string;

  @ViewChild('scroll', { read: ElementRef }) scrollElement: ElementRef;
  @ViewChild('scroll') scroll: ScrollbarComponent;

  constructor(
    private cd: ChangeDetectorRef,
    private mediaReplayService: MediaReplayService
  ) { }

  ngOnInit() {
    this.chats = sortBy(chatDemoData, 'lastMessageTime').reverse();
    this.activeChat = this.chats[0];

    this.mediaReplayService.media$.pipe(
      takeUntil(componentDestroyed(this))
    ).subscribe((change: MediaChange) => {
      const isMobile = (change.mqAlias === 'xs') || (change.mqAlias === 'sm');

      if (isMobile) {
        this.drawerOpen = false;
        this.drawerMode = 'over';
        this.drawerDisableClose = false;
      } else {
        this.drawerOpen = true;
        this.drawerMode = 'side';
        this.drawerDisableClose = true;
      }
    });
  }

  setActiveChat(chat) {
    this.activeChat = chat;
  }

  send() {
    if (this.newMessage) {
      this.chats[0].messages.push({
        message: this.newMessage,
        when: moment(),
        who: 'me'
      });

      this.newMessage = '';

      this.cd.markForCheck();
      this.scrollToBottom();

      setTimeout(() => {
        this.chats[0].messages.push({
          message: 'Oh look! I can even answer you. ;)',
          when: moment(),
          who: 'partner'
        });

        this.cd.markForCheck();
        this.scrollToBottom();
      }, 1000);
    }
  }

  clearMessages(activeChat) {
    activeChat.messages.length = 0;
  }

  scrollToBottom() {
    setTimeout(() => {
      this.scroll.scrollbar.scrollTo(0, this.scroll.scrollbar.getSize().content.height, 200);
    }, 100)
  }

  ngOnDestroy() {}
}
