import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppConfig} from '../models/app-config.model';

interface Brand {
  SearchBy: string;
  IgnoreInactive?: boolean
}

@Injectable()
export class BrandService {

  constructor(private http: HttpClient,
              @Inject('config') private config: AppConfig) {
  }

  list(body: Brand, startIndex: number, pageRecords: number): Observable<HttpResponse<any>> {
    return this.http.post(`${this.config.apiBaseUrl}core/brand/${startIndex}/${pageRecords}`, body, {observe: 'response'});
  }

}
