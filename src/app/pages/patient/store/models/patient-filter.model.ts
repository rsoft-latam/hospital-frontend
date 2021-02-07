import {FilterModel} from '../../../../shared/models/filter.model';

export interface HospitalFilter extends FilterModel {
  firstName?: { value: string, type: string };
  lastName?: { value: string, type: string };
}
