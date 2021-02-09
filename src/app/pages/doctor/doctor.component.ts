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
import * as doctorActions from './status/doctor.actions';
import {Action, ActionsSubject, Store} from '@ngrx/store';
// SERVICESa
import {DoctorService} from './services/doctor.service';
// COMPONENTS
import {AlertComponent} from '../../shared/modules/alert/alert.component';
// OTHERS
import {ROUTE_TRANSITION} from '../../app.animation';
import {AppConfig} from '../../shared/models/app-config.model';
import {DoctorFilter} from './models/doctor-filter.model';
import {ActionsButtonPatientComponent} from '../../shared/components/actions-button-patient.component';
import {InformationComponent} from '../../shared/modules/information/information.component';
import {NoteService} from '../note/services/note.service';
import {PageEvent} from '@angular/material/paginator';
import {DatePipe} from '@angular/common';
import {formatDate} from '../../shared/utils/format.util';

const initFilter: DoctorFilter = {
  page: 0,
  size: 50,
  sort: ''
};

@Component({
  templateUrl: './doctor.component.html',
  animations: [...ROUTE_TRANSITION],
  host: {'[@routeTransition]': ''},
  encapsulation: ViewEncapsulation.None
})

export class DoctorComponent implements OnInit, OnDestroy {

  // AG-GRID CONFIG
  private gridApi;
  private gridColumnApi;
  public columnDefs;
  public context;
  public frameworkComponents;

  // FILTER SUBS
  filter: DoctorFilter;
  isLoadingFilter = new BehaviorSubject<boolean>(false);

  // OTHERS
  sidenavOpen$: Observable<boolean>;
  filterOpen$: Observable<boolean>;
  actionSubs: Subscription[] = [];
  filterForm: FormGroup;

  subs: Subscription;

  total = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(public dialog: MatDialog,
              private store: Store<State>,
              private actions: ActionsSubject,
              private formBuilder: FormBuilder,
              private mappingService: DoctorService,
              private noteService: NoteService,
              @Inject('config') private config: AppConfig) {

    // FILTER FORM CONFIG
    this.filterForm = this.formBuilder.group({
      firstName: null,
      lastName: null
    });

    // AG-GRID CONFIG
    this.columnDefs = [
      {headerName: 'Actions', cellRenderer: 'editButtonComponent', pinned: 'left', minWidth: 140, maxWidth: 140},
      {headerName: 'ID', field: 'id'},
      {headerName: 'Url Photo', field: 'urlPhoto'},
      {headerName: 'First Name', field: 'firstName'},
      {headerName: 'Last Name', field: 'lastName'},
      {headerName: 'Address', field: 'address'},
      {headerName: 'Birthday', field: 'birthday', valueGetter: (p: any) => formatDate(p.data.birthday)},
      {headerName: 'Hospital', field: 'hospital', valueGetter: p => p?.data?.hospital?.name},
      {headerName: 'Created By', field: 'createdBy'},
      {headerName: 'Created Date', field: 'createdDate', valueGetter: (p: any) => formatDate(p.data.createdDate)},
      {headerName: 'Last Modified By', field: 'lastModifiedBy'},
      {headerName: 'Last Modified Date', field: 'lastModifiedDate', valueGetter: (p: any) => formatDate(p.data.lastModifiedDate)}
    ];

    this.context = {componentParent: this};
    this.frameworkComponents = {
      editButtonComponent: ActionsButtonPatientComponent
    };

  }

  ngOnInit(): void {

    // SUBS
    this.sidenavOpen$ = this.store.select(s => s.appDoctor.sidenavOpen);
    this.filterOpen$ = this.store.select(s => s.appDoctor.filterOpen);

    // SET FILTER SUBS
    this.actionSubs.push(this.actions.pipe(
      filter(s => s.type === doctorActions.SetFilter.type),
      map((s: any) => s.filter),
      tap((filter: DoctorFilter) => {
        this.filter = Object.assign({}, filter);
        this.isLoadingFilter.next(false);
        this.subs = this.mappingService.list(filter).subscribe(data => {
            this.total = parseFloat(data.headers.get('X-Total-Count'));
            this.gridApi.setRowData(data.body);
          }
        );
      })
    ).subscribe());

    // ADD UPDATE DELETE HOSPITAL SUCCESS
    this.actionSubs.push(this.actions.pipe(
      filter(s =>
        s.type === doctorActions.AddSuccess.type ||
        s.type === doctorActions.UpdateSuccess.type ||
        s.type === doctorActions.DeleteSuccess.type
      ),
      tap(() => {
        this.store.dispatch(doctorActions.CloseSidenav());
        this.store.dispatch(doctorActions.SetFilter({filter: initFilter}));
      })
    ).subscribe());

  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
    this.actionSubs.forEach(subs => subs.unsubscribe());
  }

  actionButtonRowTable(event): void {
    if (event.type === 'edit') {
      this.store.dispatch(doctorActions.GetDoctorAction({id: event.row.id}));
      this.store.dispatch(doctorActions.OpenSidenav({addStatus: 'edit'}));
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
        res === true ? this.store.dispatch(doctorActions.DeleteAction({id: event.row.id})) : '';
      });
    }
    if (event.type === 'doctor') {
      this.dialog.open(InformationComponent, {
        data: {
          title: 'Patients And Notes',
          row: event.row,
          cols: [],
          service: this.noteService,
          method: 'listByIdDoctor',
          filter: {idDoctor: {value: event.row.id, type: 'equals'}, page: 0, size: 50, sort: ''},
          columnDefs: [
            {headerName: 'First Name Patient', field: 'firstNamePatient'},
            {headerName: 'Last Name Patient', field: 'lastNamePatient'},
            {headerName: 'Description', field: 'description'},
            {headerName: 'Date', field: 'date', valueGetter: (p: any) => formatDate(p.data.date)}
          ]
        }
      });
    }
  }

  onGridReady(params): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.store.dispatch(doctorActions.SetFilter({filter: initFilter}));
  }

  onSearch(): void {
    this.isLoadingFilter.next(true);
    this.store.dispatch(doctorActions.SetFilter({
      filter: {
        ...this.filter,
        page: 0,
        firstName: {value: this.filterForm.value.firstName, type: 'contains'},
        lastName: {value: this.filterForm.value.lastName, type: 'contains'}
      }
    }));
  }

  onAdd(): void {
    this.store.dispatch(doctorActions.OpenSidenav({addStatus: 'new'}));
  }

  onReset(): void {
    this.store.dispatch(doctorActions.CloseFilter());
    this.store.dispatch(doctorActions.SetFilter({filter: initFilter}));
  }

  clickOnFilter(hiddenFilter): void {
    if (hiddenFilter) {
      this.store.dispatch(doctorActions.OpenFilter());
    } else {
      this.store.dispatch(doctorActions.CloseFilter());
    }
  }


  onPagination(event: PageEvent): void {
    this.store.dispatch(doctorActions.SetFilter({
      filter: {
        ...this.filter,
        size: event.pageSize,
        page: event.pageIndex
      }
    }));
  }

}
