import {FilterModel} from './filter.model';

export class ResultHeader<TFilter extends FilterModel> {
  TotalCount: number;
  Skip: number;
  Take: number;
  Count: number;
  Request: TFilter;
}
