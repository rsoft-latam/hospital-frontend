import {Observable} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {AppConfig} from '../../../../shared/models/app-config.model';
import {IDataService} from '../../../../shared/models/data-service.model';
import {HospitalFilter} from '../models/note-filter.model';
import {createRequestOption} from '../../../../shared/utils/request-util';

@Injectable()
export class NoteService implements IDataService<HospitalFilter> {

  constructor(private http: HttpClient,
              @Inject('config') private config: AppConfig) {
  }

  public list(filter: HospitalFilter): Observable<HttpResponse<any>> {
    const params = createRequestOption({
      page: filter.page,
      size: filter.size,
      sort: filter.sort,
      name: filter.name
    });
    return this.http.get(`${this.config.apiBaseUrl}hospitals`, {params: params, observe: 'response'});
  }

  public create(body: any): Observable<HttpResponse<any>> {
    return this.http.post(`${this.config.apiBaseUrl}hospitals`, body, {observe: 'response'});
  }

  public update(body: any): Observable<HttpResponse<any>> {
    return this.http.put(`${this.config.apiBaseUrl}hospitals`, body, {observe: 'response'});
  }

  public delete(id): Observable<HttpResponse<any>> {
    return this.http.delete(`${this.config.apiBaseUrl}hospitals/${id}`, {observe: 'response'});
  }

  public getById(id: number): Observable<HttpResponse<any>> {
    return this.http.get(`${this.config.apiBaseUrl}hospitals/${id}`, {observe: 'response'});
  }

}
