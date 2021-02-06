// Angular
import {FormBuilder, FormGroup} from '@angular/forms';
import {Component, OnDestroy, OnInit} from '@angular/core';
// RXJS
import {BehaviorSubject, Subscription} from 'rxjs';
import {filter, shareReplay, tap} from 'rxjs/operators';
// NGRX
import {State} from '../../../reducers';
import {ActionsSubject, Store} from '@ngrx/store';
import * as hospitalActions from '../store/specialty.actions';

@Component({
  selector: 'hospital-form',
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

  constructor(private formBuilder: FormBuilder,
              private store: Store<State>,
              private actions: ActionsSubject) {

  }

  ngOnInit(): void {

    // CONFIG FORM
    this.form = this.formBuilder.group({
      id: null,
      name: null,
      creationDate: null
    });

    // GET HOSPITAL SUCCESS
    this.actionSubs.push(this.actions.pipe(
      filter(s => s.type === hospitalActions.HospitalActionTypes.GetHospitalSuccess),
      tap((s: any) => {
        const form = Object.assign({}, s.payload.entity.body);
        this.form.setValue({
          id: form.id,
          name: form.name,
          creationDate: form.creationDate
        });
      })
    ).subscribe());

    // UPDATE OR ADD SUCCESS
    this.actionSubs.push(this.actions.pipe(
      filter(s =>
        s.type === hospitalActions.HospitalActionTypes.AddSuccess ||
        s.type === hospitalActions.HospitalActionTypes.UpdateSuccess),
      tap((s) => {
        this.isLoadingSave.next(false);
        this.closeSidenav();
      })
    ).subscribe());

    // UPDATE OR ADD FAILURE
    this.actionSubs.push(this.actions.pipe(
      filter(s =>
        s.type === hospitalActions.HospitalActionTypes.AddFailure ||
        s.type === hospitalActions.HospitalActionTypes.UpdateFailure),
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

  }

  ngOnDestroy(): void {
    this.actionSubs.forEach(subs => subs.unsubscribe());
  }

  onSave(): void {
    this.isLoadingSave.next(true);
    if (this.sidenavFormType === 'new') {
      this.store.dispatch(new hospitalActions.AddAction({entity: this.form.value}));
    }
    if (this.sidenavFormType === 'edit') {
      this.store.dispatch(new hospitalActions.UpdateAction({entity: this.form.value}));
    }
  }

  closeSidenav(): void {
    this.store.dispatch(new hospitalActions.CloseSidenav());
  }

}
