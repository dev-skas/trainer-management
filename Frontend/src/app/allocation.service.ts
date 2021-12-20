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
  approvetrainer(trainer:any,emptype:any){
    return this.http.put('http://localhost:3000/approve',trainer,emptype)
    

  }
  rejecttrainer(trainerid:any){
    console.log("serv"+trainerid)
    return this.http.delete('http://localhost:3000/reject/'+trainerid)
    
.subscribe((data)=>{
  console.log("reject");
})
    

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
