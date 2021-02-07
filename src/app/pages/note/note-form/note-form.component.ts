// Angular
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Component, OnDestroy, OnInit} from '@angular/core';
// RXJS
import {BehaviorSubject, Subscription} from 'rxjs';
import {debounceTime, filter, finalize, shareReplay, startWith, switchMap, tap} from 'rxjs/operators';
// NGRX
import {State} from '../../../reducers';
import {ActionsSubject, Store} from '@ngrx/store';
import * as noteActions from '../store/note.actions';
import {PatientService} from '../../patient/store/services/patient.service';
import {DoctorService} from '../../doctor/store/services/doctor.service';

@Component({
  selector: 'note-form',
  templateUrl: './note-form.component.html'
})

export class NoteFormComponent implements OnInit, OnDestroy {

  form: FormGroup;

  // SUBS
  actionSubs: Subscription[] = [];

  // LOADER VARS
  isLoadingSave = new BehaviorSubject<boolean>(false);

  // SIDENAV FORM TYPE SUBS
  sidenavFormType$ = this.store.select(s => s.appNote.sidenavFormType).pipe(shareReplay());
  sidenavFormTypeSubs: Subscription;
  sidenavFormType: string;

  doctors = [];
  isLoadingIdDoctor = new BehaviorSubject<boolean>(false);

  patients = [];
  isLoadingIdPatient = new BehaviorSubject<boolean>(false);

  constructor(private formBuilder: FormBuilder,
              private store: Store<State>,
              private actions: ActionsSubject,
              private patientService: PatientService,
              private doctorService: DoctorService) {

  }

  ngOnInit(): void {

    // CONFIG FORM
    this.form = this.formBuilder.group({
      id: null,
      idDoctor: [null, [Validators.required]],
      idPatient: [null, [Validators.required]],
      date: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });

    // GET HOSPITAL SUCCESS
    this.actionSubs.push(this.actions.pipe(
      filter(s => s.type === noteActions.HospitalActionTypes.GetHospitalSuccess),
      tap((s: any) => {
        const form = Object.assign({}, s.payload.entity.body);
        this.form.setValue({
          id: form.id,
          idDoctor: form.idDoctor,
          idPatient: form.idPatient,
          date: form.date,
          description: form.description
        });
      })
    ).subscribe());

    // UPDATE OR ADD SUCCESS
    this.actionSubs.push(this.actions.pipe(
      filter(s =>
        s.type === noteActions.HospitalActionTypes.AddSuccess ||
        s.type === noteActions.HospitalActionTypes.UpdateSuccess),
      tap((s) => {
        this.isLoadingSave.next(false);
        this.closeSidenav();
      })
    ).subscribe());

    // UPDATE OR ADD FAILURE
    this.actionSubs.push(this.actions.pipe(
      filter(s =>
        s.type === noteActions.HospitalActionTypes.AddFailure ||
        s.type === noteActions.HospitalActionTypes.UpdateFailure),
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
    this.form.get('idPatient').valueChanges.pipe(
      debounceTime(1000),
      startWith(''),
      tap(() => this.isLoadingIdPatient.next(true)),
      switchMap(value => this.patientService.list({
          name: value,
          page: 0,
          size: 50,
          sort: null
        }).pipe(finalize(() => this.isLoadingIdPatient.next(false)))
      )
    ).subscribe(res => this.patients = res.body);

    // HOSPITAL FIELD SUBS
    this.form.get('idDoctor').valueChanges.pipe(
      debounceTime(1000),
      startWith(''),
      tap(() => this.isLoadingIdDoctor.next(true)),
      switchMap(value => this.doctorService.list({
          firstName: value,
          page: 0,
          size: 50,
          sort: null
        }).pipe(finalize(() => this.isLoadingIdDoctor.next(false)))
      )
    ).subscribe(res => this.doctors = res.body);

  }

  ngOnDestroy(): void {
    this.actionSubs.forEach(subs => subs.unsubscribe());
  }

  onSave(): void {
    this.isLoadingSave.next(true);
    const auxFormValue = Object.assign({}, this.form.value);
    auxFormValue.idPatient = auxFormValue.idPatient.id;
    auxFormValue.idDoctor = auxFormValue.idDoctor.id;

    if (this.sidenavFormType === 'new') {
      this.store.dispatch(new noteActions.AddAction({entity: auxFormValue}));
    }
    if (this.sidenavFormType === 'edit') {
      this.store.dispatch(new noteActions.UpdateAction({entity: auxFormValue}));
    }
  }

  closeSidenav(): void {
    this.store.dispatch(new noteActions.CloseSidenav());
  }

  displayFn(data?: any): string | undefined {
    return data ? data.firstName + '-' + data.lastName : undefined;
  }
}
