import { Component, OnInit } from '@angular/core';
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
  ngOnInit(): void {
  }

  Login(){
    this.authService.userLogin(this.loginData)
    alert("Login Success")
    this.router.navigate([''])    
  }
}
