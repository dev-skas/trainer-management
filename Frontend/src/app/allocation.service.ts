import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllocationService {

  constructor(private http:HttpClient ) { }
  gettrainers()
  {
    return this.http.get('http://localhost:3000/trainers')

  }
  approvetrainer(trainer:any){
    return this.http.put('http://localhost:3000/approve',trainer)
    .subscribe((data)=>{
      console.log("approved")
    })

  }
  gettrainerdtls(trainerId:any){
    return this.http.get('http://localhost:3000/'+trainerId)

  }
}
