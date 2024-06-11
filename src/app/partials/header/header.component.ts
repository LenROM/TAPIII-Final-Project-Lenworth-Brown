import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/app-services/auth.service';
import { CustomerService } from 'src/app/app-services/customer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isLoggedIn?: boolean = false;
  loginText:string = 'Login';
  loginLink: string = '/login'
  constructor(private router: Router, private authService:AuthService){}

  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
      console.log(`isLoggedIn() = TRUE`)
      this.isLoggedIn = true;
      this.loginText = 'Logout';
      this.loginLink = '/logout';
    }else{
      console.log(`isLoggedIn() = FALSE`)
      this.isLoggedIn = false;
      this.loginText = 'Login';
      this.loginLink = '/login';
    }
  }



//   constructor( private customerService:CustomerService){}
//   meals = [];

//   ngOnInit(): void{

//   }


//   fetchMeals(){
//     this.customerService.fetchAllCustomers().subscribe(res => {
//       // this.students = res;
//       console.log(res['status']);
//       console.log(res['results']);
//       console.log(res['data']);
//       console.log(res['data']['meals']);
//       this.meals = res['data']['meals'];
//     });
// }
}
