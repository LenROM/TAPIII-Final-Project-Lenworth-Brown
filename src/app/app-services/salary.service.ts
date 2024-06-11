import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  private API_URL = 'http://localhost:4794/api/v1/sal';

  constructor(private _http: HttpClient) { }


  getAllSalary(): Observable<any>{
    return this._http.get<any>(this.API_URL + '/all-sal')
                        .pipe(
                          map((res) =>{
                           return res;
                          })
                        );
  }


  getSalaryById(id: number){
    return this._http.get(this.API_URL + `/${id}`).pipe(
      map((res)=>{
        return res;
      })
    );
  }


  createSalary(data: any){
    console.log(data);  
    return this._http.post(this.API_URL + '/new-sal', data).pipe(
      map((res) =>{
        return res;
    })
    );
}


updateSalary(data: any, id:number):Observable<any>{
  return this._http.put<any>(this.API_URL + `/update-sal/${id}`, data)
  .pipe(
      map((res) =>{
          return res;
      })
  );
}


deleteSalaryById(id: number):Observable<any> {
  return this._http.delete<any>(this.API_URL + `/delete-sal/${id}`)
  .pipe(
    map((res)=>{
      return res;
    })
  );
}

}
