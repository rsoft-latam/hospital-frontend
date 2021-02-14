// ANGULAR
import {FormBuilder, FormGroup} from '@angular/forms';
import {Component, Inject, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
// ANGULAR MATERIAL
import {MatDialog} from '@angular/material/dialog';
// RXJS
import {filter, map, tap} from 'rxjs/operators';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
// NGRX
import * as specialtyActions from './+state/specialty.actions';
import {State} from '../../reducers/index';
import {ActionsSubject, Store} from '@ngrx/store';
// SERVICES
import {SpecialtyService} from './services/specialty.service';
// COMPONENTS
import {ActionButtonComponent} from 'ngr-grid';
import {AlertComponent} from '../../shared/modules/alert/alert.component';
// MODELS
import {AppConfig} from '../../shared/models/app-config.model';
import {SpecialtyFilter} from './models/specialty-filter.model';
// OTHERS
import {ROUTE_TRANSITION} from '../../app.animation';
import {PageEvent} from '@angular/material/paginator';
import {formatDate} from '../../shared/utils/format.util';

const initFilter: SpecialtyFilter = {
  page: 0,
  size: 50,
  sort: ''
};

@Component({
  templateUrl: './specialty.component.html',
  animations: [...ROUTE_TRANSITION],
  host: {'[@routeTransition]': ''},
  encapsulation: ViewEncapsulation.None
})

export class SpecialtyComponent implements OnInit, OnDestroy {

  // AG-GRID CONFIG
  private gridApi;
  private gridColumnApi;
  public gridOptions;

  // FILTER SUBS
  filter: SpecialtyFilter;
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
              private mappingService: SpecialtyService,
              @Inject('config') private config: AppConfig) {

    // FILTER FORM CONFIG
    this.filterForm = this.formBuilder.group({
      name: null
    });

    // AG-GRID CONFIG
    this.gridOptions = {
      columnDefs: [
        {headerName: 'Actions', cellRenderer: 'editButtonComponent', pinned: 'left', minWidth: 110, maxWidth: 110},
        {headerName: 'ID', field: 'id'},
        {headerName: 'Name', field: 'name'},
        {headerName: 'Description', field: 'description'},
        {headerName: 'Doctor', field: 'doctor', valueGetter: p => p?.data?.doctor?.firstName + '-' + p?.data?.doctor?.lastName},
        {headerName: 'Icon', field: 'icon'},
        {headerName: 'CreatedBy', field: 'createdBy'},
        {headerName: 'Created Date', field: 'createdDate', valueGetter: (p: any) => formatDate(p.data.createdDate)},
        {headerName: 'Last Modified By', field: 'lastModifiedBy'},
        {headerName: 'Last Modified Date', field: 'lastModifiedDate', valueGetter: (p: any) => formatDate(p.data.lastModifiedDate)}
      ],
      context: {componentParent: this},
      frameworkComponents: {
        editButtonComponent: ActionButtonComponent
      }
    };

  }

  ngOnInit(): void {

    // SUBS
    this.sidenavOpen$ = this.store.select(s => s.appSpecialty.sidenavOpen);
    this.filterOpen$ = this.store.select(s => s.appSpecialty.filterOpen);

    // SET FILTER SUBS
    this.actionSubs.push(this.actions.pipe(
      filter(s => s.type === specialtyActions.SetFilter.type),
      map((s: any) => s.filter),
      tap((filter: SpecialtyFilter) => {
        this.filter = Object.assign({}, filter);
        this.isLoadingFilter.next(false);
        this.subs = this.mappingService.list(filter).subscribe(data => {
          this.total = parseFloat(data.headers.get('X-Total-Count'));
          this.gridApi.setRowData(data.body);
        });
      })
    ).subscribe());

    // ADD UPDATE DELETE SPECIALTY SUCCESS
    this.actionSubs.push(this.actions.pipe(
      filter(s =>
        s.type === specialtyActions.AddSuccess.type ||
        s.type === specialtyActions.UpdateSuccess.type ||
        s.type === specialtyActions.DeleteSuccess.type
      ),
      tap(() => {
        this.store.dispatch(specialtyActions.CloseSidenav());
        this.store.dispatch(specialtyActions.SetFilter({filter: initFilter}));
      })
    ).subscribe());

  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
    this.actionSubs.forEach(subs => subs.unsubscribe());
  }

  actionButtonRowTable(event): void {
    if (event.type === 'edit') {
      this.store.dispatch(specialtyActions.GetSpecialtyAction({id: event.row.id}));
      this.store.dispatch(specialtyActions.OpenSidenav({addStatus: 'edit'}));
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
        res === true ? this.store.dispatch(specialtyActions.DeleteAction({id: event.row.id})) : '';
      });
    }
  }

  onGridReady(params): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.store.dispatch(specialtyActions.SetFilter({filter: initFilter}));
  }

  onSearch(): void {
    this.isLoadingFilter.next(true);
    this.store.dispatch(specialtyActions.SetFilter({
      filter: {
        ...this.filter,
        name: {value: this.filterForm.value.name, type: 'contains'}
      }
    }));
  }

  onAdd(): void {
    this.store.dispatch(specialtyActions.OpenSidenav({addStatus: 'new'}));
  }

  onReset(): void {
    this.store.dispatch(specialtyActions.CloseFilter());
    this.store.dispatch(specialtyActions.SetFilter({filter: initFilter}));
  }

  clickOnFilter(hiddenFilter): void {
    if (hiddenFilter) {
      this.store.dispatch(specialtyActions.OpenFilter());
    } else {
      this.store.dispatch(specialtyActions.CloseFilter());
    }
  }


  onPagination(event: PageEvent): void {
    this.store.dispatch(specialtyActions.SetFilter({
      filter: {
        ...this.filter,
        size: event.pageSize,
        page: event.pageIndex
      }
    }));
  }

}
