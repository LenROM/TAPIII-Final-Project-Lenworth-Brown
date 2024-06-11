import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private API_URL = 'http://localhost:4794/api/v1/emp';

  constructor(private _http: HttpClient) { }
  

  getAllEmployee(): Observable<any>{
    return this._http.get<any>(this.API_URL + '/all-emp')
                        .pipe(
                          map((res) =>{
                           return res;
                          })
                        );
  }


  getEmpById(id: number){
    return this._http.get(this.API_URL + `/${id}`).pipe(
      map((res)=>{
        return res;
      })
    );
  }

  createEmployee(data: any){
    console.log(data);  
    return this._http.post(this.API_URL + '/new-emp', data).pipe(
      map((res) =>{
        return res;
    })
    );
}


updateEmployee(data: any, id:number):Observable<any>{
  return this._http.put<any>(this.API_URL + `/update-emp/${id}`, data)
  .pipe(
      map((res) =>{
          return res;
      })
  );
}


deleteEmpById(id: number):Observable<any> {
  return this._http.delete<any>(this.API_URL + `/delete-emp/${id}`)
  .pipe(
    map((res)=>{
      return res;
    })
  );
}


}
