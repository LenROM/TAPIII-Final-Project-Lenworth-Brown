import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartserveService {

  private API_URL = environment.api_url + '/api/v1/cust';
cartDataList: any=[];
mealList = new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) { }

  //Get Product Data
  getMealData(){
    return this.mealList.asObservable();  
  }

  //Set Product Data
  setMeal(mealz:any){
    this.cartDataList.push(...mealz);
    this.mealList.next(mealz)
  }

  //Add to cart details
  addToCart(mealz:any){
    this.cartDataList.push(mealz);
    this.mealList.next(this.cartDataList);
    this.getTotalAmount();
    console.log(this.cartDataList)
  }

  //Get Total amount
  getTotalAmount(){
    let grandTotal = 0;
    this.cartDataList.map((a:any)=>{
      grandTotal += a.total;
    })
  }

  //Remove Cart data one by one 
  removeCartData(mealz:any){
    this.cartDataList.map((a:any, index:any)=>{
      if(mealz.id == a.id){
        this.cartDataList.splice(index,1)
      }
    })
  }

  //Remove All Cart Data
  removeAllCart(){
    this.cartDataList = []
    this.mealList.next(this.cartDataList)
  }
}
