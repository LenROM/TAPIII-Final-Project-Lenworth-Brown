import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/app-services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private authService: AuthService, private router:Router){}

  ngOnInit(): void {
    
  }

  hasError?: boolean;
  errMsg?: string;
  user: any;

  onLogin(oForm: NgForm){
    console.log(`BEFORE CALL TO SERVICE`);
      const addSub = this.authService.login(oForm.value).subscribe({
        next:
        (loginRes)=>{
          console.log(`loginRes>> ${JSON.stringify(loginRes)}`)
          if(loginRes['status'] === 'success'){
            this.hasError = false;
    
            this.authService.authToken = loginRes['data']!['token'];
            this.authService.saveAuthToken();
            this.authService.getCurrentUser(()=>{
              this.user = this.authService.currentUser;
              console.log(`USER DATA:  ${JSON.stringify(this.user)}`);
              if(this.user.role === 'ADMIN')
                this.router.navigate(['/employee'])
              this.authService.loginState = true;
            });
            this.router.navigateByUrl('/index');
          }
          // else{
          //   //Display error messages
          //   this.hasError = true;
          //   this.errMsg = loginRes['message'];
    
          //   this.authService.loginState = false;
          //   this.router.navigateByUrl('/login');
          // }
        },
        error:
        (error) =>{
          console.log(error.error.message);
          this.hasError = true;
          this.errMsg = error.error['message'];

          this.authService.loginState = false;
        },
        complete:
        () =>{
          
        }
        
       
      
   

  })
}
}
