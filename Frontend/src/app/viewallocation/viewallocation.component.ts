import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllocationService } from '../allocation.service';
import { TrainersModel } from '../Models/trainers.model';

@Component({
  selector: 'app-viewallocation',
  templateUrl: './viewallocation.component.html',
  styleUrls: ['./viewallocation.component.css']
})
export class ViewallocationComponent implements OnInit {
  nodata= false;

  constructor(private _allocate:AllocationService,private _router:Router) { this.trainers=[];}
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
}
