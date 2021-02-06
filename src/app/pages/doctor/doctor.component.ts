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
import * as doctorActions from './store/doctor.actions';
import {Action, ActionsSubject, Store} from '@ngrx/store';
// SERVICES
import {DoctorService} from './store/services/doctor.service';
import {BrandService} from '../../shared/services/brand.service';
import {SupplierService} from '../../shared/services/supplier.service';
// COMPONENTS
import {AlertComponent} from '../../shared/modules/alert/alert.component';
// OTHERS
import {ROUTE_TRANSITION} from '../../app.animation';
import {AppConfig} from '../../shared/models/app-config.model';
import {EditButtonComponent} from '../../shared/components/edit-button.component';
import {HospitalFilter} from './store/models/doctor-filter.model';

const initFilter: HospitalFilter = {
  name: '',
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
  public autoGroupColumnDef;
  public rowSelection;
  public rowGroupPanelShow;
  public pivotPanelShow;
  public paginationPageSize;
  public paginationNumberFormatter;
  public defaultColDef;
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

  constructor(public dialog: MatDialog,
              private store: Store<State>,
              private actions: ActionsSubject,
              private formBuilder: FormBuilder,
              private brandService: BrandService,
              private mappingService: DoctorService,
              private supplierService: SupplierService,
              @Inject('config') private config: AppConfig) {

    // FILTER FORM CONFIG
    this.filterForm = this.formBuilder.group({
      name: null
    });

    // AG-GRID CONFIG
    this.columnDefs = [
      {headerName: 'Id', field: 'id'},
      {headerName: 'Url Photo', field: 'urlPhoto'},
      {headerName: 'First Name', field: 'firstName'},
      {headerName: 'Last Name', field: 'lastName'},
      {headerName: 'Address', field: 'address'},
      {headerName: 'Birthday', field: 'birthday'},
      {headerName: 'Hospital', field: 'hospital'},
      {headerName: 'Actions', cellRenderer: 'editButtonComponent', pinned: 'right'}
    ];

    this.context = {componentParent: this};
    this.frameworkComponents = {
      editButtonComponent: EditButtonComponent
    };

    this.defaultColDef = {
      editable: false,
      enableRowGroup: true,
      suppressSizeToFit: true,
      enablePivot: true,
      enableValue: true,
      sortable: true,
      resizable: true
    };

  }

  ngOnInit(): void {

    // SUBS
    this.sidenavOpen$ = this.store.select(s => s.appHospital.sidenavOpen);
    this.filterOpen$ = this.store.select(s => s.appHospital.filterOpen);

    // SET FILTER SUBS
    this.actionSubs.push(this.actions.pipe(
      filter(s => s.type === doctorActions.HospitalActionTypes.SetFilter),
      map((s: any) => s.payload.filter),
      tap((filter: HospitalFilter) => {
        this.filter = Object.assign({}, filter);
        this.isLoadingFilter.next(false);
        this.subs = this.mappingService.list(filter).subscribe(data => this.gridApi.setRowData(data.body));
      })
    ).subscribe());

    // ADD UPDATE DELETE HOSPITAL SUCCESS
    this.actionSubs.push(this.actions.pipe(
      filter(s =>
        s.type === doctorActions.HospitalActionTypes.AddSuccess ||
        s.type === doctorActions.HospitalActionTypes.UpdateSuccess ||
        s.type === doctorActions.HospitalActionTypes.DeleteSuccess
      ),
      tap(() => {
        this.store.dispatch(new doctorActions.CloseSidenav());
        this.store.dispatch(new doctorActions.SetFilter({filter: initFilter}));
      })
    ).subscribe());

  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
    this.actionSubs.forEach(subs => subs.unsubscribe());
  }

  actionButtonRowTable(event): void {
    if (event.type === 'edit') {
      this.store.dispatch(new doctorActions.GetHospitalAction({id: event.row.id}));
      this.store.dispatch(new doctorActions.OpenSidenav({addStatus: 'edit'}));
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
        res === true ? this.store.dispatch(new doctorActions.DeleteAction({id: event.row.id})) : '';
      });
    }
  }

  onGridReady(params): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
    this.store.dispatch(new doctorActions.SetFilter({filter: initFilter}));
  }

  onApply(): void {
    this.isLoadingFilter.next(true);
    this.store.dispatch(new doctorActions.SetFilter({
      filter: {
        ...this.filter,
        name: this.filterForm.value.name
      }
    }));
  }

  onAdd(): void {
    this.store.dispatch(new doctorActions.OpenSidenav({addStatus: 'new'}));
  }

  onReset(): void {
    this.store.dispatch(new doctorActions.CloseFilter());
    this.store.dispatch(new doctorActions.SetFilter({filter: initFilter}));
  }

  clickOnFilter(hiddenFilter): void {
    if (hiddenFilter) {
      this.store.dispatch(new doctorActions.OpenFilter());
    } else {
      this.store.dispatch(new doctorActions.CloseFilter());
    }
  }

}
