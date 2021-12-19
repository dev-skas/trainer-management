import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }

  // Register New Trainer:
  newTrainer(formData:FormData){
    
    return this.http.post("http://localhost:3000/registerTrainer",formData)
    .subscribe(
      (res)=>console.log(res),
      (err)=>console.log(err)
      
    );
  }

  // Login Trainer
  userLogin(trainer:any){
    return this.http.post("http://localhost:3000/login",trainer)
   
  }
}
