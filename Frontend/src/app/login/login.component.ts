import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }
  
  loginData ={
    email:'',
    password:''
  }
  user:any
  ngOnInit(): void {
  }

  Login(){

    

    this.authService.userLogin(this.loginData).subscribe(res => {

      this.user = res 

      if (this.user.role == "admin"){
        this.router.navigate(['admin'])    
        
      } else {
      localStorage.setItem("findtrainerData",this.user.id)

        this.router.navigate(['profile'])    
        
      }      


    },
      err => {
      console.log(err)
    })

  }
}
