import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppConfig} from '../models/app-config.model';

interface Brand {
  SearchBy: string;
}

@Injectable()
export class SupplierService {

  constructor(private http: HttpClient,
              @Inject('config') private config: AppConfig) {
  }

  list(): Observable<HttpResponse<any>> {
    return this.http.get(`${this.config.apiBaseUrl}watchlist/query/suppliers/list`, {observe: 'response'});
  }
}
