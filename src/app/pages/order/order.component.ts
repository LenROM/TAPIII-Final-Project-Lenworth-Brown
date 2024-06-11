import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/app-services/auth.service';
import { CustomerService } from 'src/app/app-services/customer.service';
import { OrderService } from 'src/app/app-services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{

  orders = [];
  id: any;
  res: any;
  order: any;

  addOrder = new FormGroup( {
    fname: new FormControl(''),
    lname: new FormControl(''),
    deli_addr: new FormControl(''),
    meal_nm: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    img: new FormControl(''),
    order_tot: new FormControl(''),
    delivery_status: new FormControl('pending'),
    order_date: new FormControl(''),
    userid: new FormControl(''),

  });

constructor(private route:ActivatedRoute, 
  private orderService:OrderService, private customerService:CustomerService, private router: Router, private authService:AuthService){}

  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.viewStudent();
    this.fetchOrders();
  }

  viewStudent(){
    this.orderService.fetchOrderById(this.id).subscribe(res => {
      this.order=res;
      // console.log(res);
  });
     }

  fetchOrders(){
    this.authService.getProfile().subscribe(res =>{
      this.orders = res['orders'];
    });
    this.orderService.fetchAllOrders(this.id).subscribe(res => {
      // this.students = res;
      // console.log(res['status']);
      // console.log(res['results']);
      // console.log(res['data']);
      this.orders = res['orders'];
      console.log(res['orders']);
    });
  }


  
}
