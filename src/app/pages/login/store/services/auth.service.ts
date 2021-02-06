import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable,} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {AuthConfigService} from './auth-config.service';
import {AuthenticateResponse, AuthenticateByLogin, User} from '../models/auth.models';
import {JwtHelperService} from '@auth0/angular-jwt';

const jwtHelper = new JwtHelperService();

@Injectable()
export class AuthService {


  constructor(private http: HttpClient, private configService: AuthConfigService, private store: Store<any>) {

  }

  login(credentials: AuthenticateByLogin): Observable<{ user: User, authenticate: AuthenticateResponse }> {
    const config = this.configService.Get();

    return this.http.post(`${config.loginUrl}`, {
      username: credentials.username,
      password: credentials.password,
      rememberMe: credentials.rememberMe
    })
      .pipe<{ user: User, authenticate: AuthenticateResponse }>(
        map((data: any) => {
          return {user: this.parseToken(data.id_token), authenticate: {authToken: data.id_token, refreshToken: undefined}};
        })
      );
  }


  parseToken(token: string): User {
    const obj = jwtHelper.decodeToken(token);
    return {username: obj.unique_name, email: obj.email, displayName: obj.display_name, roles: obj.roles};
  }
}
