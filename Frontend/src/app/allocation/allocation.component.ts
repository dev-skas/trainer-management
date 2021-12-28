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
    //for test

    
    let trainerId=localStorage.getItem("trainerid");
 
    this._allocate.gettrainerdtls(trainerId).subscribe((data)=>{
      this.trainerdtls=JSON.parse(JSON.stringify(data));
      
    })
  }

  cidSelect(event:any){
    this.trainerdtls.courseid = event.target.value;

  }
  bidSelect(event:any){
    this.trainerdtls.batchid = event.target.value;

  }

  allocate(trainerdtls: any) {
   
    this._allocate.allocate(this.trainerdtls);


    this._router.navigate(['/admin/searchtrainer']);


  }

  
}
