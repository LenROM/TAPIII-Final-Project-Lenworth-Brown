import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/app-services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
image = 'assets/images/BackgroundRestaurant.jpg';


isLoggedIn?: boolean = false;
  loginText:string = 'Login';
  constructor(private router: Router, private authService:AuthService){}

  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
      this.isLoggedIn = true;
      this.loginText = 'Logout';
    }else{
      this.isLoggedIn = false;
      this.loginText = 'Login';
    }
  }
}
