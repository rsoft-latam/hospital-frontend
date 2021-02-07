// ANGULAR
import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';
// NGRX
import {StoreModule} from '@ngrx/store';
import {reducer} from './note.reducer';
import {EffectsModule} from '@ngrx/effects';
import {NoteEffects} from './note.effects';
// SERVICES
import {NoteService} from '../services/note.service';
// OTHERS
import {AppConfig} from '../../../shared/models/app-config.model';

@NgModule({
  imports: [CommonModule]
})

export class AppNoteModule {
  static forRoot(config: AppConfig): ModuleWithProviders<any> {
    return {
      ngModule: RootAppNoteModule,
      providers: [
        NoteService,
        {provide: 'config', useValue: config}
      ]
    };
  }
}

@NgModule({
  imports: [
    AppNoteModule,
    StoreModule.forFeature('appNote', reducer, {}),
    EffectsModule.forFeature([NoteEffects]),
  ],
})

export class RootAppNoteModule {
}
