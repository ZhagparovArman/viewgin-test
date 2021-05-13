import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Info, IUser } from '../models/user';
import {rests} from '../rests'
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(login: string, password: string) {
    return this.http.post<IUser>(rests.rest_login, { login, password })
        .pipe(map(user => {
          localStorage.setItem('token', JSON.stringify(user.token));
          return
        }))      
  }

  getInfo(){
    return this.http.get<Info>(rests.rest_info);
  }

  logout() {
    localStorage.removeItem("token");
  }
}
