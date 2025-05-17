import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IRegister, Ilogin } from '../model/login';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseURL: string = `${environment.baseurl}`;
  loginBaseURL: string = `${environment.loginurl}`;
  LOGINURL: string = `${this.loginBaseURL}/api/auth/login`;
  SIGNUP: string = `${this.loginBaseURL}/api/auth/register`;
  productURL: string = `${this.baseURL}/products`;

  constructor(private _http: HttpClient) {}

  fetchallproduct(): Observable<any> {
    return this._http.get<any>(this.productURL);
  }

  // login
  registeruser(userDetail: IRegister): Observable<any> {
    return this._http.post<any>(`${this.SIGNUP}`, userDetail);
  }

  // login user (login)
  loginuser(userDetail: Ilogin): Observable<any> {
    return this._http.post<any>(`${this.LOGINURL}`, userDetail);
  }

  // save token and userrole in LS
  savetokentoLS(token: string) {
    localStorage.setItem('token', token);
  }

  saveuserrole(userrole: string) {
    localStorage.setItem('userrole', userrole);
  }

  getuserrole() {
    return localStorage.getItem('userrole');
  }
  //get token from ls
  gettoken() {
    return localStorage.getItem('token');
  }
}
