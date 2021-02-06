// AG-GRID
import {IServerSideDatasource, IServerSideGetRowsParams} from 'ag-grid-community';
// RXJS
import {Subscription} from 'rxjs';
// NGRX
import {Store} from '@ngrx/store';
import {State} from '../../reducers';
// OTHERS
import {FilterModel} from '../models/filter.model';
import {IDataService} from '../models/data-service.model';
import {ResultHeader} from '../models/result-header.model';

export class ServerSideDatasource<TFilter extends FilterModel, TService extends IDataService<FilterModel>> implements IServerSideDatasource {

  subs: Subscription;

  constructor(private service: TService,
              private filter: any,
              private store: Store<State>,
              private type: string) {
  }

  getRows(params: IServerSideGetRowsParams): void {
    if (params.request.sortModel.length > 0) {
      const auxFilter = Object.assign({}, this.filter,
        {
          OrderBy: {
            Key: params.request.sortModel[0].colId,
            Value: params.request.sortModel[0].sort
          }
        });
      this.filter = auxFilter;
    }

    /*this.subs = this.service.list(this.filter, params.request.startRow, (params.request.endRow - params.request.startRow))
      .subscribe(data => {
        params.successCallback(data.Data.Result, data.Data.Result.length > 0 ? data.Data.TotalCount : 0);

      }, err => {

      });*/
  }

  destroy() {
    this.subs?.unsubscribe();
  }

}
