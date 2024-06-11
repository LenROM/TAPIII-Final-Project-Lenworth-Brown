import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private API_URL = 'http://localhost:4794/api/v1/attend';

  constructor(private _http: HttpClient) { }


  getAllAttend(): Observable<any>{
    return this._http.get<any>(this.API_URL + '/all-attend')
                        .pipe(
                          map((res) =>{
                           return res;
                          })
                        );
  }


  getAttById(id: number){
    return this._http.get(this.API_URL + `/${id}`).pipe(
      map((res)=>{
        return res;
      })
    );
  }


  createAttend(data: any){
    console.log(data);  
    return this._http.post(this.API_URL + '/new-attend', data).pipe(
      map((res) =>{
        return res;
    })
    );
}


updateAttend(data: any, id:number):Observable<any>{
  return this._http.put<any>(this.API_URL + `/update-attend/${id}`, data)
  .pipe(
      map((res) =>{
          return res;
      })
  );
}


deleteAttById(id: number):Observable<any> {
  return this._http.delete<any>(this.API_URL + `/delete-attend/${id}`)
  .pipe(
    map((res)=>{
      return res;
    })
  );
}


}
