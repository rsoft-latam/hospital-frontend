import {FilterModel} from '../../../../shared/models/filter.model';

export interface HospitalFilter extends FilterModel {
  firstName: string;
  lastName: string;
}
