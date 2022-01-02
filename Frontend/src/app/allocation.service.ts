import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllocationService {

  constructor(private http:HttpClient ) { }
  gettrainers()
  {
    return this.http.get('api/trainers')

  }

  gettrainerdtl()
  {
    return this.http.get('api/trainerdtl')

  }
  approvetrainer(trainer:any,emptype:any){
    return this.http.put('api/approve',trainer,emptype)
    

  }
  rejecttrainer(trainerid:any){
   
    return this.http.delete('api/reject/'+trainerid)
    
.subscribe((data)=>{
  
})
    

  }
  gettrainerdtls(trainerId:any){
    return this.http.get('api:3000/'+trainerId)

  }
  
  allocate(trainerdtls:any){
    return this.http.put<any>('api/allocate',trainerdtls)
    .subscribe((data)=>{
      console.log("update load")
    })  }
}
