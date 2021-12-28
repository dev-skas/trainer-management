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
  err=false
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
        localStorage.setItem('tokenAdmin',this.user.tokenAdmin)
        this.router.navigate(['admin'])    
        
      } else {
        localStorage.setItem('tokenUser',this.user.tokenUser)
        localStorage.setItem("findtrainerData",this.user.id)
        this.router.navigate(['profile'])    
        
      }      


    },
      error => {
      this.err = true
    })

  }
}
