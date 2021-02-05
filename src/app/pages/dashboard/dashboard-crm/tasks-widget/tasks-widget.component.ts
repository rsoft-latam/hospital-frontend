import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { MatSnackBar } from '@angular/material';
import { LIST_FADE_ANIMATION } from '../../../../core/utils/list.animation';

@Component({
  selector: 'elastic-tasks-widget',
  templateUrl: './tasks-widget.component.html',
  styleUrls: ['./tasks-widget.component.scss'],
  animations: [...LIST_FADE_ANIMATION]
})
export class TasksWidgetComponent implements OnInit {

  tasks: any[] = [ ];

  constructor(
    private snackbar: MatSnackBar,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.tasks = [
      {
        done: false,
        name: 'Email Chris about the christmas special',
        date: moment().format('MMM DD')
      },
      {
        done: false,
        name: 'Call Veronica to buy crackers',
        date: moment().subtract(1, 'day').format('MMM DD')
      },
      {
        done: true,
        name: 'Meet with Lenny to get up to date',
        date: moment().subtract(1, 'day').format('MMM DD')
      },
      {
        done: false,
        name: 'Buy that awesome design you saw',
        date: moment().subtract(1, 'day').format('MMM DD')
      },
      {
        done: false,
        name: 'Call Alex to get in touch',
        date: moment().subtract(2, 'day').format('MMM DD')
      }
    ];
  }

  archive(task) {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
      const snackbarRef = this.snackbar.open('Archived Task', 'UNDO');

      this.cd.markForCheck();

      snackbarRef.onAction().subscribe(() => {
        this.tasks.splice(index, 0, task);

        this.cd.markForCheck();
      });
    }
  }

}
