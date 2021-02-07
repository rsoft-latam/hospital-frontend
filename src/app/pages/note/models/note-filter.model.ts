import {FilterModel} from '../../../shared/models/filter.model';

export interface NoteFilter extends FilterModel {
  name?: { value: string, type: string };
  idPatient?: { value: number, type: string };
  idDoctor?: { value: number, type: string };
}
