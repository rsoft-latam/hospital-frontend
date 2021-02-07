import {FilterModel} from '../../../shared/models/filter.model';

export interface HospitalFilter extends FilterModel {
  name?: { value: string, type: string };
}
