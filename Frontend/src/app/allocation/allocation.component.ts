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
    Unique_ID :'',
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
  date = new Date().toISOString().slice(0, 10);

  constructor(private _allocate:AllocationService,private _router:Router) { }

  ngOnInit(): void {
    let trainerId=localStorage.getItem("trainerid");
    console.log(trainerId)
    this._allocate.gettrainerdtls(trainerId).subscribe((data)=>{
      this.trainerdtls=JSON.parse(JSON.stringify(data));
      console.log(this.trainerdtls.name)
    })
  }
  cidSelect(event:any){
    this.trainerdtls.courseid = event.target.value;

  }
  bidSelect(event:any){
    this.trainerdtls.batchid = event.target.value;

  }
  allocate(trainerdtls:any){
   
    this._allocate.allocate(this.trainerdtls);
   
    console.log("called");
    alert("success");
    this._router.navigate(['admin']);
  
   console.log("Allocation details: "+this.trainerdtls);

 }

}
