// RXJS
import {Subscription} from 'rxjs';
// OTHERS
import {FilterModel} from '../models/filter.model';
import {IDataService} from '../models/data-service.model';

export class ServerSideDatasource<TFilter extends FilterModel, TService extends IDataService<FilterModel>> {

  subs: Subscription;

  constructor(private service: TService,
              private filter: TFilter) {
  }

  getRows(): any {
    this.subs = this.service.list(this.filter).subscribe(data => data.body);
    return this.subs;
  }

  destroy(): void {
    this.subs?.unsubscribe();
  }

}
