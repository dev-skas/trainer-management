import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllocationService } from '../allocation.service';
import { TrainersModel } from '../Models/trainers.model';
@Component({
  selector: 'app-search-trainer',
  templateUrl: './search-trainer.component.html',
  styleUrls: ['./search-trainer.component.css']
})
export class SearchTrainerComponent implements OnInit {
  nodata= false;
  constructor(private _allocate:AllocationService,private _router:Router) {this.trainers=[]; }
  trainers:TrainersModel[];

data:any;
  
  ngOnInit(): void {
    this._allocate.gettrainerdtl().subscribe((data)=>{
      
      this.trainers = JSON.parse(JSON.stringify(data));
      if (this.trainers.length === 0) {
        this.nodata=true
     } else {
 
       this.nodata=false
    }
      
    })
  }
  
  allocate(item:any){
    localStorage.setItem("trainerid",item._id.toString());
   
    // console.log("aa"+item.email)
    this._router.navigate(['admin/allocate'])
    
  }
}
