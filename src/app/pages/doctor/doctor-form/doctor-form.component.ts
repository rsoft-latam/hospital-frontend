// Angular
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Component, OnDestroy, OnInit} from '@angular/core';
// RXJS
import {BehaviorSubject, Subscription} from 'rxjs';
import {debounceTime, filter, finalize, shareReplay, startWith, switchMap, tap} from 'rxjs/operators';
// NGRX
import {State} from '../../../reducers';
import {ActionsSubject, Store} from '@ngrx/store';
import * as doctorActions from '../store/doctor.actions';
import {HospitalService} from '../../hospital/store/services/hospital.service';

@Component({
  selector: 'doctor-form',
  templateUrl: './doctor-form.component.html'
})

export class DoctorFormComponent implements OnInit, OnDestroy {

  form: FormGroup;

  // SUBS
  actionSubs: Subscription[] = [];

  // LOADER VARS
  isLoadingSave = new BehaviorSubject<boolean>(false);

  // SIDENAV FORM TYPE SUBS
  sidenavFormType$ = this.store.select(s => s.appDoctor.sidenavFormType).pipe(shareReplay());
  sidenavFormTypeSubs: Subscription;
  sidenavFormType: string;

  hospitals = [];
  isLoadingHospital = new BehaviorSubject<boolean>(false);

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
      birthday: null,
      urlPhoto: null,
      hospital: null
    });

    // GET HOSPITAL SUCCESS
    this.actionSubs.push(this.actions.pipe(
      filter(s => s.type === doctorActions.GetHospitalSuccess.type),
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

    // UPDATE OR ADD SUCCESS
    this.actionSubs.push(this.actions.pipe(
      filter(s =>
        s.type === doctorActions.AddSuccess.type ||
        s.type === doctorActions.UpdateSuccess.type),
      tap((s) => {
        this.isLoadingSave.next(false);
        this.closeSidenav();
      })
    ).subscribe());

    // UPDATE OR ADD FAILURE
    this.actionSubs.push(this.actions.pipe(
      filter(s =>
        s.type === doctorActions.AddFailure.type ||
        s.type === doctorActions.UpdateFailure.type),
      tap(() => {
        this.isLoadingSave.next(false);
      })
    ).subscribe());

    // RESULT HEADER SUBS
    this.sidenavFormTypeSubs = this.sidenavFormType$.pipe(
      tap(s => {
        this.form.reset();
        this.sidenavFormType = s;
      })).subscribe();

    // HOSPITAL FIELD SUBS
    this.form.get('hospital').valueChanges.pipe(
      debounceTime(1000),
      startWith(''),
      tap(() => this.isLoadingHospital.next(true)),
      switchMap(value => this.hospitalService.list({
          name: value,
          page: 0,
          size: 50,
          sort: null
        }).pipe(finalize(() => this.isLoadingHospital.next(false)))
      )
    ).subscribe(res => this.hospitals = res.body);

  }

  ngOnDestroy(): void {
    this.actionSubs.forEach(subs => subs.unsubscribe());
  }

  onSave(): void {
    this.isLoadingSave.next(true);
    if (this.sidenavFormType === 'new') {
      this.store.dispatch(doctorActions.AddAction({entity: this.form.value}));
    }
    if (this.sidenavFormType === 'edit') {
      this.store.dispatch(doctorActions.UpdateAction({entity: this.form.value}));
    }
  }

  closeSidenav(): void {
    this.store.dispatch(doctorActions.CloseSidenav());
  }

  displayFn(data?: any): string | undefined {
    return data ? data.name : undefined;
  }

}
