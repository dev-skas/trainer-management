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
  newTrainer(item:any){
    
    return this.http.post("http://localhost:3000/registerTrainer",{"trainer":item})
    .subscribe(data=>{console.log(data);
    });
  }

  // Login Trainer
  userLogin(trainer:any){
    return this.http.post("http://localhost:3000/login",trainer)
    .subscribe(data=>{console.log(data);
    })
  }
}
