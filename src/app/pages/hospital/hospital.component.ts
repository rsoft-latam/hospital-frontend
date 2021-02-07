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
import * as hospitalActions from './status/hospital.actions';
import {ActionsSubject, Store} from '@ngrx/store';
// SERVICES
import {HospitalService} from './services/hospital.service';
// COMPONENTS
import {AlertComponent} from '../../shared/modules/alert/alert.component';
// OTHERS
import {ROUTE_TRANSITION} from '../../app.animation';
import {AppConfig} from '../../shared/models/app-config.model';
import {HospitalFilter} from './models/hospital-filter.model';
import {ActionButtonComponent} from '../../shared/components/action-button.component';
import {PageEvent} from '@angular/material/paginator';
import {DatePipe} from '@angular/common';
import {formatDate} from '../../shared/utils/format.util';

const initFilter: HospitalFilter = {
  page: 0,
  size: 50,
  sort: ''
};

@Component({
  templateUrl: './hospital.component.html',
  animations: [...ROUTE_TRANSITION],
  host: {'[@routeTransition]': ''},
  encapsulation: ViewEncapsulation.None
})

export class HospitalComponent implements OnInit, OnDestroy {

  // AG-GRID CONFIG
  private gridApi;
  private gridColumnApi;
  public columnDefs;
  public context;
  public frameworkComponents;

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
              private mappingService: HospitalService,
              @Inject('config') private config: AppConfig) {

    // FILTER FORM CONFIG
    this.filterForm = this.formBuilder.group({
      name: null
    });

    // AG-GRID CONFIG
    this.columnDefs = [
      {headerName: 'Actions', cellRenderer: 'editButtonComponent', pinned: 'left', minWidth: 110, maxWidth: 110},
      {headerName: 'ID', field: 'id'},
      {headerName: 'Name', field: 'name'},
      {headerName: 'Creation Date', field: 'creationDate'},
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
    this.sidenavOpen$ = this.store.select(s => s.appHospital.sidenavOpen);
    this.filterOpen$ = this.store.select(s => s.appHospital.filterOpen);

    // SET FILTER SUBS
    this.actionSubs.push(this.actions.pipe(
      filter(s => s.type === hospitalActions.SetFilter.type),
      map((s: any) => s.filter),
      tap((filter: HospitalFilter) => {
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
        s.type === hospitalActions.AddSuccess.type ||
        s.type === hospitalActions.UpdateSuccess.type ||
        s.type === hospitalActions.DeleteSuccess.type
      ),
      tap(() => {
        this.store.dispatch(hospitalActions.CloseSidenav());
        this.store.dispatch(hospitalActions.SetFilter({filter: initFilter}));
      })
    ).subscribe());

  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
    this.actionSubs.forEach(subs => subs.unsubscribe());
  }

  actionButtonRowTable(event): void {
    if (event.type === 'edit') {
      this.store.dispatch(hospitalActions.GetHospitalAction({id: event.row.id}));
      this.store.dispatch(hospitalActions.OpenSidenav({addStatus: 'edit'}));
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
        res === true ? this.store.dispatch(hospitalActions.DeleteAction({id: event.row.id})) : '';
      });
    }
  }

  onGridReady(params): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
    this.store.dispatch(hospitalActions.SetFilter({filter: initFilter}));
  }

  onSearch(): void {
    this.isLoadingFilter.next(true);
    this.store.dispatch(hospitalActions.SetFilter({
      filter: {
        ...this.filter,
        page: 0,
        name: {value: this.filterForm.value.name, type: 'contains'}
      }
    }));
  }

  onAdd(): void {
    this.store.dispatch(hospitalActions.OpenSidenav({addStatus: 'new'}));
  }

  onReset(): void {
    this.store.dispatch(hospitalActions.CloseFilter());
    this.store.dispatch(hospitalActions.SetFilter({filter: initFilter}));
  }

  clickOnFilter(hiddenFilter): void {
    if (hiddenFilter) {
      this.store.dispatch(hospitalActions.OpenFilter());
    } else {
      this.store.dispatch(hospitalActions.CloseFilter());
    }
  }


  onPagination(event: PageEvent): void {
    this.store.dispatch(hospitalActions.SetFilter({
      filter: {
        ...this.filter,
        size: event.pageSize,
        page: event.pageIndex
      }
    }));
  }

}
