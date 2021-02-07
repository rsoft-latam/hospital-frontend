import {Observable} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {AppConfig} from '../../../../shared/models/app-config.model';
import {IDataService} from '../../../../shared/models/data-service.model';
import {NoteFilter} from '../models/note-filter.model';
import {createRequestOption} from '../../../../shared/utils/request-util';

@Injectable()
export class NoteService implements IDataService<NoteFilter> {

  constructor(private http: HttpClient,
              @Inject('config') private config: AppConfig) {
  }

  public list(filter: NoteFilter): Observable<HttpResponse<any>> {
    const params = createRequestOption(filter);
    return this.http.get(`${this.config.apiBaseUrl}notes-auditory`, {params: params, observe: 'response'});
  }

  public create(body: any): Observable<HttpResponse<any>> {
    return this.http.post(`${this.config.apiBaseUrl}notes`, body, {observe: 'response'});
  }

  public update(body: any): Observable<HttpResponse<any>> {
    return this.http.put(`${this.config.apiBaseUrl}notes`, body, {observe: 'response'});
  }

  public delete(id): Observable<HttpResponse<any>> {
    return this.http.delete(`${this.config.apiBaseUrl}notes/${id}`, {observe: 'response'});
  }

  public getById(id: number): Observable<HttpResponse<any>> {
    return this.http.get(`${this.config.apiBaseUrl}notes/${id}`, {observe: 'response'});
  }

  public listByIdPatient(filter: NoteFilter): Observable<HttpResponse<any>> {
    const params = createRequestOption(filter);
    return this.http.get(`${this.config.apiBaseUrl}notes/patient/${filter.idPatient}`, {params: params, observe: 'response'});
  }

  public listByIdDoctor(filter: NoteFilter): Observable<HttpResponse<any>> {
    const params = createRequestOption(filter);
    return this.http.get(`${this.config.apiBaseUrl}notes/doctor/${filter.idDoctor}`, {params: params, observe: 'response'});
  }

}
