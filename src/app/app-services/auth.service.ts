import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api_url : any;
  private API_URL = environment.api_url + '/api/v1/auth';
  public authToken?: string;
  private tokenKey: string = 'authToken';
  currentUser?: any;
  loginState?: boolean;

  /**
   * @description Function to save any item to the local storage
   * @param key The unique identifier for the item to be stored
   * @param value The data to be stored
   */

  private _saveToStorage(key: string, value: any){
    localStorage.setItem(key, value);
  }

  saveAuthToken(): void{
    this._saveToStorage(this.tokenKey, this.authToken);
  }

  isLoggedIn(): boolean{
    let token = localStorage.getItem(this.tokenKey);
    return token != null && token.length > 0;
  }

  getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
  }

  getCurrentUser(cb?: ()=> void){
    this.getProfile().subscribe((res)=>{
      if(res['status'] === 'success'){
      this.currentUser = res.data!['user'];
      if (cb) cb();
      }
    })
  }

  getProfile(): Observable<any>{
    return this._http.get<any>(this.API_URL + '/my-profile')
    .pipe(
      map((res)=>{
        return res;
      })
    );
  }
  constructor(private _http: HttpClient) { }

  //Login
  login(data: any):Observable<any> {
    return this._http.post(this.API_URL + '/login', data)
    .pipe(
      map((res)=>{
        return res;
      })
    );
  }

  //Register
  register(data: any):Observable<any> {
    return this._http.post(this.API_URL + '/register', data)
    .pipe(
      map((res)=>{
        return res;
      })
    );
  }

  logout(){
    localStorage.removeItem(this.tokenKey);
  }
}
