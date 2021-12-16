import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllocationService } from '../allocation.service';

@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.css']
})
export class AllocationComponent implements OnInit {
  training = {
    Unique_ID :'',
    name:'',
    emptype:'',
    courses:'',
    courseid:'',
    batchid:'',
    scheduletime:'',
    startdate:'',
    enddate:'',
    venue:''
  
  
  }
  date = new Date().toISOString().slice(0, 10);
  constructor(private _allocate:AllocationService,private _router:Router) { }

  ngOnInit(): void {
    //for test
    localStorage.setItem("trainerid", "61bade63ee382f10e1d9fa73")
    
    let trainerId=localStorage.getItem("trainerid");
    console.log(trainerId)
    this._allocate.gettrainerdtls(trainerId).subscribe((data)=>{
      this.training=JSON.parse(JSON.stringify(data));
      console.log(this.training.name)
    })
  }

  cidSelect(event:any){
    this.training.courseid = event.target.value;

  }
  bidSelect(event:any){
    this.training.batchid = event.target.value;

  }

  allocate(){
  
   console.log("Allocation details: "+this.training);

 }

  
}
