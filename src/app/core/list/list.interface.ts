import { Observable } from 'rxjs';
import { ListDataSource } from './list-datasource';
import { ListDatabase } from './list-database';
import { ListColumn } from './list-column.model';

export interface List<T> {
  data$: Observable<T[]>;
  columns: ListColumn[];
  pageSize: number;
  resultsLength: number;
  dataSource: ListDataSource<T> | null;
  database: ListDatabase<T>;

  onFilterChange(value): void;
}
