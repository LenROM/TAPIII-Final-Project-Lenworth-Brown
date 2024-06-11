import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import{map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // private API_URL = environment.api_url + '/api/v1/cust';
  private API_URL = 'http://localhost:4794/api/v1/menu';

  constructor(private _http: HttpClient) { }
/**
 *
 * Description: Fetches All the student records
 * @returns Response object
 */
  fetchAllMeals(): Observable<any>{
    return this._http.get<any>(this.API_URL + '/all-meals')
                        .pipe(
                          map((res) =>{
                           return res;
                          })
                        );
  }


  /**
   * Description: Retrieves a single record given an id in the parameter
   * @param id - The id of the record to retrieve
   * @returns
   */
  fetchMealById(id: number): Observable<any>{
    return this._http.get<any>(this.API_URL + `/${id}`)
                        .pipe(
                          map((res) =>{
                            return res;
                          })
                        );
  }

  createMeal(data: any): Observable<any>{
    return this._http.post<any>(this.API_URL, data)
                        .pipe(
                          map((res) =>{
                            return res;
                          })
                        );
  }


  // updateCustomer(id:number, data: any): Observable<any>{
  //   return this._http.patch<any>(this.API_URL + `/${id}`, data)
  //                       .pipe(
  //                         map((res) =>{
  //                           return res;
  //                         })
  //                       );
  // }

  // deleteCustomer(id: number): Observable<any>{
  //   return this._http.delete<any>(this.API_URL + `/${id}`)
  //                       .pipe(
  //                         map((res) =>{
  //                           return res;
  //                         })
  //                       );
  // }

  
}
