// ANGULAR
import {FormBuilder, FormGroup} from '@angular/forms';
import {Component, Inject, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
// ANGULAR MATERIAL
import {MatDialog} from '@angular/material/dialog';
// RXJS
import {filter, map, tap} from 'rxjs/operators';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
// NGRX
import {State} from '../../reducers/index';
import * as noteActions from './status/note.actions';
import {ActionsSubject, Store} from '@ngrx/store';
// SERVICES
import {NoteService} from './services/note.service';
// COMPONENTS
import {AlertComponent} from '../../shared/modules/alert/alert.component';
// OTHERS
import {ROUTE_TRANSITION} from '../../app.animation';
import {AppConfig} from '../../shared/models/app-config.model';
import {NoteFilter} from './models/note-filter.model';
import {ActionButtonComponent} from '../../shared/components/action-button.component';
import {PageEvent} from '@angular/material/paginator';
import {formatDate} from '../../shared/utils/format.util';

const initFilter: NoteFilter = {
  page: 0,
  size: 50,
  sort: ''
};

@Component({
  templateUrl: './note.component.html',
  animations: [...ROUTE_TRANSITION],
  host: {'[@routeTransition]': ''},
  encapsulation: ViewEncapsulation.None
})

export class NoteComponent implements OnInit, OnDestroy {

  // AG-GRID CONFIG
  private gridApi;
  private gridColumnApi;
  public columnDefs;
  public context;
  public frameworkComponents;

  // OTHERS
  sidenavOpen$: Observable<boolean>;
  filterOpen$: Observable<boolean>;
  actionSubs: Subscription[] = [];
  filterForm: FormGroup;

  subs: Subscription;
  filter: NoteFilter;

  total = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(public dialog: MatDialog,
              private store: Store<State>,
              private actions: ActionsSubject,
              private formBuilder: FormBuilder,
              private mappingService: NoteService,
              @Inject('config') private config: AppConfig) {

    // FILTER FORM CONFIG
    this.filterForm = this.formBuilder.group({
      name: null
    });

    // AG-GRID CONFIG
    this.columnDefs = [
      {headerName: 'Actions', cellRenderer: 'editButtonComponent', pinned: 'left', minWidth: 110, maxWidth: 110},
      {headerName: 'ID Doctor', field: 'idDoctor'},
      {headerName: 'ID Patient', field: 'idPatient'},
      {headerName: 'Description', field: 'description'},
      {headerName: 'Date', field: 'date', valueGetter: (p: any) => formatDate(p.data.date)},
      {headerName: 'Created By', field: 'createdBy'},
      {headerName: 'Created Date', field: 'createdDate', valueGetter: (p: any) => formatDate(p.data.createdDate)},
      {headerName: 'Last Modified By', field: 'lastModifiedBy'},
      {headerName: 'Last Modified Date', field: 'lastModifiedDate', valueGetter: (p: any) => formatDate(p.data.lastModifiedDate)}
    ];

    this.context = {componentParent: this};
    this.frameworkComponents = {
      editButtonComponent: ActionButtonComponent
    };

  }

  ngOnInit(): void {

    // SUBS
    this.sidenavOpen$ = this.store.select(s => s.appNote.sidenavOpen);
    this.filterOpen$ = this.store.select(s => s.appNote.filterOpen);

    // SET FILTER SUBS
    this.actionSubs.push(this.actions.pipe(
      filter(s => s.type === noteActions.SetFilter.type),
      map((s: any) => s.filter),
      tap((filter: NoteFilter) => {
        this.filter = Object.assign({}, filter);
        this.subs = this.mappingService.list(filter).subscribe(data => {
          this.total = parseFloat(data.headers.get('X-Total-Count'));
          this.gridApi.setRowData(data.body);
        });
      })
    ).subscribe());

    // ADD UPDATE DELETE HOSPITAL SUCCESS
    this.actionSubs.push(this.actions.pipe(
      filter(s =>
        s.type === noteActions.AddSuccess.type ||
        s.type === noteActions.UpdateSuccess.type ||
        s.type === noteActions.DeleteSuccess.type
      ),
      tap(() => {
        this.store.dispatch(noteActions.CloseSidenav());
        this.store.dispatch(noteActions.SetFilter({filter: initFilter}));
      })
    ).subscribe());

  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
    this.actionSubs.forEach(subs => subs.unsubscribe());
  }

  actionButtonRowTable(event): void {
    if (event.type === 'edit') {
      this.store.dispatch(noteActions.GetNoteAction({id: event.row.id}));
      this.store.dispatch(noteActions.OpenSidenav({addStatus: 'edit'}));
    }
    if (event.type === 'delete') {
      const dialogRef = this.dialog.open(AlertComponent, {
        data: {
          title: 'Delete Confirmation!',
          type: 'warning',
          message: 'Would you like to remove ? ' + event.row.id
        }
      });
      dialogRef.afterClosed().subscribe(res => {
        res === true ? this.store.dispatch(noteActions.DeleteAction({id: event.row.id})) : '';
      });
    }
  }

  onGridReady(params): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.store.dispatch(noteActions.SetFilter({filter: initFilter}));
  }

  onAdd(): void {
    this.store.dispatch(noteActions.OpenSidenav({addStatus: 'new'}));
  }

  onReset(): void {
    this.store.dispatch(noteActions.CloseFilter());
    this.store.dispatch(noteActions.SetFilter({filter: initFilter}));
  }

  clickOnFilter(hiddenFilter): void {
    if (hiddenFilter) {
      this.store.dispatch(noteActions.OpenFilter());
    } else {
      this.store.dispatch(noteActions.CloseFilter());
    }
  }

  onPagination(event: PageEvent): void {
    this.store.dispatch(noteActions.SetFilter({
      filter: {
        ...this.filter,
        size: event.pageSize,
        page: event.pageIndex
      }
    }));
  }

}
