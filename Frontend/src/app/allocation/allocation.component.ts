import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllocationService } from '../allocation.service';

@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.css']
})
export class AllocationComponent implements OnInit {
  trainerdtls = {
    id :'',
    name:'',
    courses:'',
    courseid:'',
    batchid:'',
    scheduletime:'',
    startdate:'',
    enddate:'',
    venue:'',
    emptype:''
  
  
  }
  constructor(private _allocate:AllocationService,private _router:Router) { }

  ngOnInit(): void {
    let trainerId=localStorage.getItem("trainerid");
    console.log(trainerId)
    this._allocate.gettrainerdtls(trainerId).subscribe((data)=>{
      this.trainerdtls=JSON.parse(JSON.stringify(data));
      console.log(this.trainerdtls.name)
    })
  }
//   cidSelect(event:any){
//     this.training.cid = event.target.value;

//   }
//   bidSelect(event:any){
//     this.training.bid = event.target.value;

//   }
  allocate(){
  
   console.log("Allocation details: "+this.trainerdtls);

 }

}
