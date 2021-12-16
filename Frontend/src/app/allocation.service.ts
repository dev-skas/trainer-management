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

  gettrainerdtl()
  {
    return this.http.get('http://localhost:3000/trainerdtl')

  }
  approvetrainer(trainer:any){
    return this.http.put('http://localhost:3000/approve',trainer)
    

  }
  gettrainerdtls(trainerId:any){
    return this.http.get('http://localhost:3000/'+trainerId)

  }
  
  allocate(trainerdtls:any){
    return this.http.put<any>('http://localhost:3000/allocate',trainerdtls)
    .subscribe((data)=>{
      console.log("update load")
    })  }
}
