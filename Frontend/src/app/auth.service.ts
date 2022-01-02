import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   token:any;
  constructor(
    private http:HttpClient
  ) { }

  // Register New Trainer:
  newTrainer(formData:FormData){
    
    return this.http.post("api/registerTrainer",formData)
    .subscribe(
      (res)=>console.log(res),
      (err)=>console.log(err)
      
    );
  }

  // Login Trainer
  userLogin(trainer:any){
    return this.http.post("api/login",trainer)
   
  }
  UserLoggedIn(){
    return !!localStorage.getItem('tokenUser')  
  }
  AdminLoggedIn(){
    return !!localStorage.getItem('tokenAdmin')
  }
  getToken(){
 
    if(this.UserLoggedIn()){
      this.token = localStorage.getItem('tokenUser')
    }
    else if(this.AdminLoggedIn()){
     this.token = localStorage.getItem('tokenAdmin')
    }
    
    return this.token;
  }
}
