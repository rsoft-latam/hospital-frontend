// ANGULAR
import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
// RXJS
import {Observable} from 'rxjs';
// NOTES
import {HospitalFilter} from '../models/patient-filter.model';
import {AppConfig} from '../../../shared/models/app-config.model';
import {IDataService} from '../../../shared/models/data-service.model';
// OTHERS
import {createRequestOption} from '../../../shared/utils/request-util';

@Injectable()
export class PatientService implements IDataService<HospitalFilter> {

  constructor(private http: HttpClient,
              @Inject('config') private config: AppConfig) {
  }

  public list(filter: HospitalFilter): Observable<HttpResponse<any>> {
    const params = createRequestOption(filter);
    return this.http.get(`${this.config.apiBaseUrl}patients-auditory`, {params: params, observe: 'response'});
  }

  public create(body: any): Observable<HttpResponse<any>> {
    return this.http.post(`${this.config.apiBaseUrl}patients`, body, {observe: 'response'});
  }

  public update(body: any): Observable<HttpResponse<any>> {
    return this.http.put(`${this.config.apiBaseUrl}patients`, body, {observe: 'response'});
  }

  public delete(id): Observable<HttpResponse<any>> {
    return this.http.delete(`${this.config.apiBaseUrl}patients/${id}`, {observe: 'response'});
  }

  public getById(id: number): Observable<HttpResponse<any>> {
    return this.http.get(`${this.config.apiBaseUrl}patients/${id}`, {observe: 'response'});
  }

}
