import { withJsonpSupport } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/app-services/auth.service';
import { CartserveService } from 'src/app/app-services/cartserve.service';
import { CustomerService } from 'src/app/app-services/customer.service';
import { HttpClient } from '@angular/common/http';
import { OrderService } from 'src/app/app-services/order.service';
import { EmployeeService } from 'src/app/app-services/employee.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  image = 'assets/images/woodendesign.jpg';
quantity: number = 0;
selectedFoodItem: any;
  orderObj: any ={
  "order_tot": 0,
  "delivery_status": "pending",
  "order_date": new Date(),
  "quantity": this.quantity,
  "user_id": 0,
  "meals_id": 0
  }

  
  totalItemNumber:number = 0;
  meals = [];
  mealList: any;
  id: any;
  res: any;


  constructor(private route:ActivatedRoute, 
    private customerService:CustomerService, 
    private cartserve:CartserveService, 
    private authService:AuthService, 
    private orderService:OrderService,
    private empService:EmployeeService
  ){
      
      const loggedData = localStorage.getItem(`loginRes`);
       if(loggedData != null){
        const data = JSON.parse(loggedData);
        this.orderObj.user_id = data.id;
       }
      
      }
    
  
       
  
    
  ngOnInit(){
    
    this.id=this.route.snapshot.params['id'];
    this.viewMeal();
    this.fetchMeals();

    this.mealList.forEach((a:any)=>{
      Object.assign(a,{quantity:1, total:a.price})
    });

    this.cartserve.getMealData().subscribe(res=>{
      this.totalItemNumber = res.length;
    })
  }

  addtoCart(meal:any){
this.cartserve.addToCart(meal);
  }

  //creates function to fetch View  path from Student Services
viewMeal(){
  this.customerService.fetchMealById(this.id).subscribe(res => {
    this.res=res;
});
   }


   fetchMeals(){
    this.customerService.fetchAllMeals().subscribe(res => {
      this.meals = res['meals'];
      console.log(res['meals']);
    });

  }

openQtyModel(item: any){
  
  const model = document.getElementById('myModal');
  if(model != null){
    model.style.display = "block";
  }
  this.selectedFoodItem = item;
}
closeQtyModel(item: any){
  const model = document.getElementById('myModal');
  if(model != null){
    model.style.display = "none";
  }
}


placeOrder(){
 
this.orderService.createOrder(this.orderObj).subscribe((res:any)=>{
  if(res.result){
    alert('Order Placed')
  }else{
    alert(res.message)
  }
})
}


  // constructor(private customerService: CustomerService){}


  // ngOnDestroy(): void {
  //   throw new Error('Method not implemented.');
  // }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  //Variable Declaration
  // customers: any = [];
  // isError: boolean = false;

  //Function in component to retrieve records through the customerService
//   populateTable(){
//     const customerSub = this.customerService.fetchAllCustomers().subscribe(res =>{
// if(res['status'] == 'success'){
//   this.customers = res ['data']['customers'];
// }else{
//   this.isError = true;
// }
//     });
//   }
}
