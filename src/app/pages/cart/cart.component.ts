import { Component, OnInit } from '@angular/core';
import { CartserveService } from 'src/app/app-services/cartserve.service';
import { CustomerService } from 'src/app/app-services/customer.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
meals:any = [];
allmeals = [];
allMeals:any =0;
constructor(private cartserve:CartserveService, private customerService:CustomerService){}

ngOnInit(): void {
  this.cartserve.getMealData().subscribe(res=>{
    this.meals = res;
    this.allMeals = this.cartserve.getTotalAmount();
  })

  
}

removeMeal(item:any){
  this.cartserve.removeCartData(item);
}

removeAllMeal(){
  this.cartserve.removeAllCart();
}

mealData(){
  this.customerService.fetchAllMeals().subscribe(res=>{
    this.allmeals = res;
    console.log(res);
  })
}

}
