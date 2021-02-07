import {FilterModel} from '../../../../shared/models/filter.model';

export interface NoteFilter extends FilterModel {
  name?: string;
  idPatient?: number;
}
