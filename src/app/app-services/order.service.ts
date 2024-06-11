import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import {map} from 'rxjs/operators'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private API_URL = environment.api_url + '/api/v1/order';
  // private API_URL = 'http://localhost:4794/api/v1/order';
  constructor(private _http: HttpClient) { }


  cartItems: any = {
    items:[]
  }

  /**
 *
 * Description: Fetches All the student records
 * @returns Response object
 */
  fetchAllOrders(id:number): Observable<any>{
    return this._http.get<any>(this.API_URL + `/all-orders/${id}`)
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
  fetchOrderById(id: number): Observable<any>{
    return this._http.get<any>(this.API_URL + `/${id}`)
                        .pipe(
                          map((res) =>{
                            return res;
                          })
                        );
  }
  
  
  
  createOrder(data: any){
  console.log(data);  
  return this._http.post(this.API_URL + '/new-order', data).pipe(
    map((res) =>{
      return res;
  })
  );
}
}





// placeOrder(data: any): Observable<any>{
//   return this._http.post<any>(this.API_URL, data)
//                       .pipe(
//                         map((res) =>{
//                           return res;
//                         })
//                       );
// }
