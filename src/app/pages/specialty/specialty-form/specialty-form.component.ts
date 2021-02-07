// Angular
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Component, OnDestroy, OnInit} from '@angular/core';
// RXJS
import {BehaviorSubject, Subscription} from 'rxjs';
import {debounceTime, filter, finalize, shareReplay, startWith, switchMap, tap} from 'rxjs/operators';
// NGRX
import {State} from '../../../reducers';
import {ActionsSubject, Store} from '@ngrx/store';
import * as hospitalActions from '../store/specialty.actions';
import {DoctorService} from '../../doctor/store/services/doctor.service';

@Component({
  selector: 'specialty-form',
  templateUrl: './specialty-form.component.html'
})

export class SpecialtyFormComponent implements OnInit, OnDestroy {

  form: FormGroup;

  // SUBS
  actionSubs: Subscription[] = [];

  // LOADER VARS
  isLoadingSave = new BehaviorSubject<boolean>(false);

  // SIDENAV FORM TYPE SUBS
  sidenavFormType$ = this.store.select(s => s.appHospital.sidenavFormType).pipe(shareReplay());
  sidenavFormTypeSubs: Subscription;
  sidenavFormType: string;

  doctors = [];
  isLoadingDoctor = new BehaviorSubject<boolean>(false);

  constructor(private formBuilder: FormBuilder,
              private store: Store<State>,
              private actions: ActionsSubject,
              private doctorService: DoctorService) {

  }

  ngOnInit(): void {

    // CONFIG FORM
    this.form = this.formBuilder.group({
      id: null,
      name: [null, [Validators.required]],
      description: null,
      icon: null,
      doctor: null
    });

    // GET HOSPITAL SUCCESS
    this.actionSubs.push(this.actions.pipe(
      filter(s => s.type === hospitalActions.GetSpecialtySuccess.type),
      tap((s: any) => {
        const form = Object.assign({}, s.entity.body);
        this.form.setValue({
          id: form.id,
          name: form.name,
          description: form.description,
          icon: form.icon,
          doctor: form.doctor
        });
      })
    ).subscribe());

    // UPDATE OR ADD SUCCESS
    this.actionSubs.push(this.actions.pipe(
      filter(s =>
        s.type === hospitalActions.AddSuccess.type ||
        s.type === hospitalActions.UpdateSuccess.type),
      tap((s) => {
        this.isLoadingSave.next(false);
        this.closeSidenav();
      })
    ).subscribe());

    // UPDATE OR ADD FAILURE
    this.actionSubs.push(this.actions.pipe(
      filter(s =>
        s.type === hospitalActions.AddFailure.type ||
        s.type === hospitalActions.UpdateFailure.type),
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
    this.form.get('doctor').valueChanges.pipe(
      debounceTime(1000),
      startWith(''),
      tap(() => this.isLoadingDoctor.next(true)),
      switchMap(value => this.doctorService.list({
          firstName: value,
          lastName: '',
          page: 0,
          size: 50,
          sort: null
        }).pipe(finalize(() => this.isLoadingDoctor.next(false)))
      )
    ).subscribe(res => this.doctors = res.body);

  }

  ngOnDestroy(): void {
    this.actionSubs.forEach(subs => subs.unsubscribe());
  }

  onSave(): void {
    this.isLoadingSave.next(true);
    if (this.sidenavFormType === 'new') {
      this.store.dispatch(hospitalActions.AddAction({entity: this.form.value}));
    }
    if (this.sidenavFormType === 'edit') {
      this.store.dispatch(hospitalActions.UpdateAction({entity: this.form.value}));
    }
  }

  closeSidenav(): void {
    this.store.dispatch(hospitalActions.CloseSidenav());
  }

  displayFn(data?: any): string | undefined {
    return data ? data.firstName : undefined;
  }

}
