import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  loginData ={
    email:'',
    password:''
  }
  ngOnInit(): void {
  }

  Login(){
     // the object is converted to string and the 3rd parameter ensures that output will pretty print with spaces
      console.log("Login Data entered: " +JSON.stringify(this.loginData,null," "));
    
  }
}
