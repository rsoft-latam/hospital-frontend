import {Observable} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {AppConfig} from '../../../shared/models/app-config.model';
import {IDataService} from '../../../shared/models/data-service.model';
import {SpecialtyFilter} from '../models/specialty-filter.model';
import {createRequestOption} from '../../../shared/utils/request-util';

@Injectable()
export class SpecialtyService implements IDataService<SpecialtyFilter> {

  constructor(private http: HttpClient,
              @Inject('config') private config: AppConfig) {
  }

  public list(filter: SpecialtyFilter): Observable<HttpResponse<any>> {
    const params = createRequestOption({
      page: filter.page,
      size: filter.size,
      sort: filter.sort,
      name: filter.name
    });
    return this.http.get(`${this.config.apiBaseUrl}specialties-auditory`, {params: params, observe: 'response'});
  }

  public create(body: any): Observable<HttpResponse<any>> {
    return this.http.post(`${this.config.apiBaseUrl}specialties`, body, {observe: 'response'});
  }

  public update(body: any): Observable<HttpResponse<any>> {
    return this.http.put(`${this.config.apiBaseUrl}specialties`, body, {observe: 'response'});
  }

  public delete(id): Observable<HttpResponse<any>> {
    return this.http.delete(`${this.config.apiBaseUrl}specialties/${id}`, {observe: 'response'});
  }

  public getById(id: number): Observable<HttpResponse<any>> {
    return this.http.get(`${this.config.apiBaseUrl}specialties/${id}`, {observe: 'response'});
  }

}