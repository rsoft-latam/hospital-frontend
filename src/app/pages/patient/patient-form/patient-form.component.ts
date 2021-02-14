// ANGULAR
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Component, OnDestroy, OnInit} from '@angular/core';
// RXJS
import {BehaviorSubject, Subscription} from 'rxjs';
import {debounceTime, filter, finalize, shareReplay, startWith, switchMap, tap} from 'rxjs/operators';
// NGRX
import * as patientActions from '../+state/patient.actions';
import {State} from '../../../reducers';
import {ActionsSubject, Store} from '@ngrx/store';
// SERVICES
import {HospitalService} from '../../hospital/services/hospital.service';

@Component({
  selector: 'patient-form',
  templateUrl: './patient-form.component.html'
})

export class PatientFormComponent implements OnInit, OnDestroy {

  form: FormGroup;

  // SUBS
  actionSubs: Subscription[] = [];

  // LOADER VARS
  isLoadingSave = new BehaviorSubject<boolean>(false);

  // SIDENAV FORM TYPE SUBS
  sidenavFormType$ = this.store.select(s => s.appPatient.sidenavFormType).pipe(shareReplay());
  sidenavFormTypeSubs: Subscription;
  sidenavFormType: string;

  patients = [];
  isLoadingPatient = new BehaviorSubject<boolean>(false);

  constructor(private formBuilder: FormBuilder,
              private store: Store<State>,
              private actions: ActionsSubject,
              private hospitalService: HospitalService) {

  }

  ngOnInit(): void {

    // CONFIG FORM
    this.form = this.formBuilder.group({
      id: null,
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      address: [null, [Validators.required]],
      birthday: [null, [Validators.required]],
      urlPhoto: null,
      hospital: null
    });

    // GET PATIENT SUCCESS
    this.actionSubs.push(this.actions.pipe(
      filter(s => s.type === patientActions.GetPatientSuccess.type),
      tap((s: any) => {
        const form = Object.assign({}, s.entity.body);
        this.form.setValue({
          id: form.id,
          firstName: form.firstName,
          lastName: form.lastName,
          address: form.address,
          birthday: form.birthday,
          urlPhoto: form.urlPhoto,
          hospital: form.hospital
        });
      })
    ).subscribe());

    // UPDATE OR ADD SUCCESS PATIENT
    this.actionSubs.push(this.actions.pipe(
      filter(s =>
        s.type === patientActions.AddSuccess.type ||
        s.type === patientActions.UpdateSuccess.type),
      tap((s) => {
        this.isLoadingSave.next(false);
        this.closeSidenav();
      })
    ).subscribe());

    // UPDATE OR ADD PATIENT FAILURE
    this.actionSubs.push(this.actions.pipe(
      filter(s =>
        s.type === patientActions.AddFailure.type ||
        s.type === patientActions.UpdateFailure.type),
      tap(() => {
        this.isLoadingSave.next(false);
      })
    ).subscribe());

    // SIDENAV FORM TYPE SUBS
    this.sidenavFormTypeSubs = this.sidenavFormType$.pipe(
      tap(s => {
        this.form.reset();
        this.sidenavFormType = s;
      })).subscribe();

    // HOSPITAL FIELD SUBS
    this.form.get('hospital').valueChanges.pipe(
      debounceTime(1000),
      startWith(''),
      tap(() => this.isLoadingPatient.next(true)),
      switchMap(value => this.hospitalService.list({
          name: {value: value, type: 'contains'},
          page: 0,
          size: 50,
          sort: null
        }).pipe(finalize(() => this.isLoadingPatient.next(false)))
      )
    ).subscribe(res => this.patients = res.body);

  }

  ngOnDestroy(): void {
    this.actionSubs.forEach(subs => subs.unsubscribe());
  }

  onSave(): void {
    this.isLoadingSave.next(true);
    if (this.sidenavFormType === 'new') {
      this.store.dispatch(patientActions.AddAction({entity: this.form.value}));
    }
    if (this.sidenavFormType === 'edit') {
      this.store.dispatch(patientActions.UpdateAction({entity: this.form.value}));
    }
  }

  closeSidenav(): void {
    this.store.dispatch(patientActions.CloseSidenav());
  }

  displayFn(data?: any): string | undefined {
    return data ? data.name : undefined;
  }

}
