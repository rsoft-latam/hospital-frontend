import {FilterModel} from '../../../../shared/models/filter.model';

export interface SpecialtyFilter extends FilterModel {
  name?: { value: string, type: string };
}
