import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  Renderer2,
  ViewChildren
} from '@angular/core';
import { Mail } from 'app/pages/inbox/mail.model';
import { Subscription } from 'rxjs';
import { MatDialog, MatSnackBar } from '@angular/material';
import { InboxComposeComponent } from 'app/pages/inbox/inbox-compose/inbox-compose.component';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers/index';
import * as inboxAction from './shared/inbox.action';
import { demoMails } from './inbox.demo';
import { ROUTE_TRANSITION } from '../../app.animation';

@Component({
  selector: 'elastic-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class InboxComponent implements OnInit, OnDestroy, AfterViewChecked {

  allMails: Mail[] = [ ];

  mails: Mail[] = [ ];
  currentlyOpen: Mail;
  activeGroup: string;
  activeType: string;
  showOnlyStarred: boolean;

  selectedMails: Mail[] = [ ];

  allMailsSubscription: Subscription;
  mailsSubscription: Subscription;
  currentlyOpenSubscription: Subscription;
  activeGroupSubscription: Subscription;
  activeTypeSubscription: Subscription;
  showOnlyStarredSubscription: Subscription;

  clickListeners: Function[] = [ ];

  respondActive: boolean;

  respondOptions = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'color': [ ] }, { 'background': [ ] }],          // dropdown with defaults from theme
      [{ 'font': [ ] }],
      [{ 'align': [ ] }],

      ['clean'],                                         // remove formatting button

      ['link', 'image', 'video']                         // link and image, video
    ]
  };

  @ViewChildren('mailList')
  mailList: QueryList<ElementRef>;
  scrollbar: any;

  constructor(
    private cd: ChangeDetectorRef,
    private store: Store<fromRoot.State>,
    private renderer: Renderer2,
    public composeDialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.store.dispatch(new inboxAction.RemoveAllMailsAction());

    this.store.dispatch(new inboxAction.BulkAddMailAction(demoMails.map((mail) => {
      return new Mail(mail);
    })));

    this.allMailsSubscription = this.store.select(fromRoot.getInboxMails)
      .subscribe((allMails: Mail[]) => {
        this.allMails = allMails;
        this.cd.markForCheck();
      });

    this.mailsSubscription = this.store.select(fromRoot.getInboxMailsFiltered)
      .subscribe((mails: Mail[]) => {
        this.mails = mails;
        this.cd.markForCheck();
      });

    this.currentlyOpenSubscription = this.store.select(fromRoot.getInboxCurrentlyOpen)
      .subscribe((currentlyOpen: Mail) => {
        this.currentlyOpen = currentlyOpen;
        this.cd.markForCheck();
      });

    this.activeGroupSubscription = this.store.select(fromRoot.getInboxActiveGroup)
      .subscribe((activeGroup: string) => {
        this.activeGroup = activeGroup;
        this.cd.markForCheck();
      });

    this.activeTypeSubscription = this.store.select(fromRoot.getInboxActiveType)
      .subscribe((activeType: string) => {
        this.activeType = activeType;
        this.cd.markForCheck();
      });

    this.showOnlyStarredSubscription = this.store.select(fromRoot.getInboxShowOnlyStarred)
      .subscribe((showOnlyStarred: boolean) => {
        this.showOnlyStarred = showOnlyStarred;
        this.cd.markForCheck();
      });
  }

  ngAfterViewChecked() {
    this.createMailListClickListeners();
  }

  openMail(mail: Mail) {
    this.store.dispatch(new inboxAction.OpenMailAction(mail))
  }

  closeMail() {
    this.store.dispatch(new inboxAction.CloseMailAction())
  }

  setActiveGroup(group: string) {
    this.store.dispatch(new inboxAction.SetActiveGroupAction(group))
  }

  setActiveType(type: string) {
    this.store.dispatch(new inboxAction.SetActiveTypeAction(type))
  }

  setShowOnlyStarred() {
    this.store.dispatch(new inboxAction.ShowOnlyStarredAction())
  }

  isSelected(mail) {
    return this.selectedMails.includes(mail);
  }

  openComposeDialog() {
    const dialogRef = this.composeDialog.open(InboxComposeComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snackBar.open(result, null, {
          duration: 3000
        });
      }
    });
  }

  createMailListClickListeners() {
    this.clickListeners.forEach((listener) => {
      listener();
    });

    this.mailList.forEach((elem, index) => {
      this.clickListeners.push(
        this.renderer.listen(elem.nativeElement, 'click', (event) => {
          if (!event.target.classList.contains('mat-checkbox-inner-container') && !event.target.classList.contains('star')) {
            this.openMail(this.mails[index]);
          }
        })
      );
    });
  }

  toggleSelectAllThreads(event) {
    if (event.checked) {
      this.selectedMails = this.mails;
    } else {
      this.selectedMails = [ ];
    }
  }

  toggleStarred(mail: Mail) {
    mail.starred = !mail.starred;
  }

  unreadMailsCount(group): string {
    const count = this.allMails.filter((mail) => {
      return (mail.read === false && mail.group === group)
    }).length;
    let text = '';

    if (count > 0) {
      text = `(${count})`
    }

    return text;
  }

  setRespondActive(active: boolean) {
    this.respondActive = active;
  }

  paginationCount() {
    if (this.mails.length < 25) {
      return this.mails.length;
    } else {
      return '25';
    }
  }

  ngOnDestroy() {
    this.allMailsSubscription.unsubscribe();
    this.mailsSubscription.unsubscribe();
    this.currentlyOpenSubscription.unsubscribe();
    this.activeGroupSubscription.unsubscribe();
    this.activeTypeSubscription.unsubscribe();
    this.showOnlyStarredSubscription.unsubscribe();

    this.clickListeners.forEach((listener) => {
      listener();
    });
  }
}
