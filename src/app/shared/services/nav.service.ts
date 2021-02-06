import {Observable} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {AppConfig} from '../models/app-config.model';

@Injectable()
export class NavService {

  constructor(private http: HttpClient,
              @Inject('config') private config: AppConfig) {
  }

  public getNavStatus(): Observable<HttpResponse<any>> {
    return this.http.get(`${this.config.apiBaseUrl}shared/nav`, {observe: 'response'});
  }
}
