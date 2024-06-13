import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/app-services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{


  constructor(private authServe: AuthService, private router: Router){}

  ngOnInit(): void {
  }

  saveUser(oForm: NgForm){
    const addSub = this.authServe.register(oForm.value).subscribe( (res) =>{
      if (res['status'] == 'success'){
        this.router.navigateByUrl('/login');
      }
    })
  }

}
