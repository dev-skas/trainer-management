import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identity } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private http:HttpClient) { }

  gettrainer(id:any){
    return this.http.get("http://localhost:3000/profile/"+id);
  
  }

// edit trainer profile:
  edittrainer(formData:FormData)
  {
     return this.http.put("http://localhost:3000/editprofile",formData)
    .subscribe(data=>{console.log(data)})

  }

}
