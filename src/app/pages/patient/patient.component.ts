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
import * as patientActions from './+state/patient.actions';
import {ActionsSubject, Store} from '@ngrx/store';
// SERVICES
import {PatientService} from './services/patient.service';
// COMPONENTS
import {AlertComponent} from '../../shared/modules/alert/alert.component';
// OTHERS
import {ROUTE_TRANSITION} from '../../app.animation';
import {AppConfig} from '../../shared/models/app-config.model';
import {HospitalFilter} from './models/patient-filter.model';
import {ActionsButtonPatientComponent} from 'ngr-grid';
import {InformationComponent} from '../../shared/modules/information/information.component';
import {NoteService} from '../note/services/note.service';
import {DoctorService} from '../doctor/services/doctor.service';
import {PageEvent} from '@angular/material/paginator';
import {formatDate} from '../../shared/utils/format.util';

const initFilter: HospitalFilter = {
  page: 0,
  size: 50,
  sort: ''
};

@Component({
  templateUrl: './patient.component.html',
  animations: [...ROUTE_TRANSITION],
  host: {'[@routeTransition]': ''},
  encapsulation: ViewEncapsulation.None
})

export class PatientComponent implements OnInit, OnDestroy {

  // AG-GRID CONFIG
  private gridApi;
  private gridColumnApi;
  public gridOptions;

  // FILTER SUBS
  filter: HospitalFilter;
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
              private mappingService: PatientService,
              private noteService: NoteService,
              private doctorService: DoctorService,
              @Inject('config') private config: AppConfig) {

    // FILTER FORM CONFIG
    this.filterForm = this.formBuilder.group({
      firstName: null,
      lastName: null
    });

    // AG-GRID CONFIG
    this.gridOptions = {
      columnDefs: [
        {headerName: 'Actions', cellRenderer: 'editButtonComponent', pinned: 'left', minWidth: 140, maxWidth: 140},
        {headerName: 'ID', field: 'id'},
        {headerName: 'Photo', field: 'urlPhoto'},
        {headerName: 'First Name', field: 'firstName'},
        {headerName: 'Last Name', field: 'lastName'},
        {headerName: 'Address', field: 'address'},
        {headerName: 'Birthday', field: 'birthday', valueGetter: (p: any) => formatDate(p.data.birthday)},
        {headerName: 'Hospital', field: 'hospital', valueGetter: p => p?.data?.hospital?.name},
        {headerName: 'Created By', field: 'createdBy'},
        {headerName: 'Created Date', field: 'createdDate', valueGetter: (p: any) => formatDate(p.data.createdDate)},
        {headerName: 'Last Modified By', field: 'lastModifiedBy'},
        {headerName: 'Last Modified Date', field: 'lastModifiedDate', valueGetter: (p: any) => formatDate(p.data.lastModifiedDate)}
      ],
      context: {componentParent: this},
      frameworkComponents: {
        editButtonComponent: ActionsButtonPatientComponent
      }
    };

  }

  ngOnInit(): void {

    // SUBS
    this.sidenavOpen$ = this.store.select(s => s.appPatient.sidenavOpen);
    this.filterOpen$ = this.store.select(s => s.appPatient.filterOpen);

    // SET FILTER SUBS
    this.actionSubs.push(this.actions.pipe(
      filter(s => s.type === patientActions.SetFilter.type),
      map((s: any) => s.filter),
      tap((filter: HospitalFilter) => {
        this.filter = Object.assign({}, filter);
        this.isLoadingFilter.next(false);
        this.subs = this.mappingService.list(filter).subscribe(data => {
          this.total = parseFloat(data.headers.get('X-Total-Count'));
          this.gridApi.setRowData(data.body);
        });
      })
    ).subscribe());

    // ADD UPDATE DELETE HOSPITAL SUCCESS
    this.actionSubs.push(this.actions.pipe(
      filter(s =>
        s.type === patientActions.AddSuccess.type ||
        s.type === patientActions.UpdateSuccess.type ||
        s.type === patientActions.DeleteSuccess.type
      ),
      tap(() => {
        this.store.dispatch(patientActions.CloseSidenav());
        this.store.dispatch(patientActions.SetFilter({filter: initFilter}));
      })
    ).subscribe());

  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
    this.actionSubs.forEach(subs => subs.unsubscribe());
  }

  actionButtonRowTable(event): void {
    if (event.type === 'edit') {
      this.store.dispatch(patientActions.GetPatientAction({id: event.row.id}));
      this.store.dispatch(patientActions.OpenSidenav({addStatus: 'edit'}));
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
        res === true ? this.store.dispatch(patientActions.DeleteAction({id: event.row.id})) : '';
      });
    }
    if (event.type === 'doctor') {
      this.dialog.open(InformationComponent, {
        data: {
          title: 'Doctors And Notes',
          row: event.row,
          cols: [],
          service: this.noteService,
          method: 'listByIdPatient',
          filter: {idPatient: {value: event.row.id, type: 'equals'}, page: 0, size: 50, sort: ''},
          columnDefs: [
            {headerName: 'First Name Doctor', field: 'firstNameDoctor'},
            {headerName: 'Last Name Doctor', field: 'lastNameDoctor'},
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
    this.store.dispatch(patientActions.SetFilter({filter: initFilter}));
  }

  onSearch(): void {
    this.isLoadingFilter.next(true);
    this.store.dispatch(patientActions.SetFilter({
      filter: {
        ...this.filter,
        page: 0,
        firstName: {value: this.filterForm.value.firstName, type: 'contains'},
        lastName: {value: this.filterForm.value.lastName, type: 'contains'}
      }
    }));
  }

  onAdd(): void {
    this.store.dispatch(patientActions.OpenSidenav({addStatus: 'new'}));
  }

  onReset(): void {
    this.store.dispatch(patientActions.CloseFilter());
    this.store.dispatch(patientActions.SetFilter({filter: initFilter}));
  }

  clickOnFilter(hiddenFilter): void {
    if (hiddenFilter) {
      this.store.dispatch(patientActions.OpenFilter());
    } else {
      this.store.dispatch(patientActions.CloseFilter());
    }
  }


  onPagination(event: PageEvent): void {
    this.store.dispatch(patientActions.SetFilter({
      filter: {
        ...this.filter,
        size: event.pageSize,
        page: event.pageIndex
      }
    }));
  }

}
