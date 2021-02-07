import {FilterModel} from '../../../shared/models/filter.model';

export interface DoctorFilter extends FilterModel {
  firstName?: { value: string, type: string };
  lastName?: { value: string, type: string };
}
