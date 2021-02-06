import {Observable} from 'rxjs';
import {FilterModel} from './filter.model';

export interface IDataService<T extends FilterModel> {
  list(filter: T): Observable<any>;
}
