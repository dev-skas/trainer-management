import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllocationService } from '../allocation.service';
import { TrainersModel } from '../Models/trainers.model';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-allocation-details-page',
  templateUrl: './allocation-details-page.component.html',
  styleUrls: ['./allocation-details-page.component.css']
})
export class AllocationDetailsPageComponent implements OnInit {

  constructor(
    private router: Router,
    private allocationService:AllocationService,
    private trainerService:TrainerService
  ) { }
  profiles:TrainersModel[] | any;
  // profiles = {
  //   skillSet:'',
  //   courseid:'',
  //   batchid:'',
  //   scheduletime:'',
  //   startdate:'',
  //   enddate:'',
  //   venue:'',
  //   courses:''
  // }
  
  ngOnInit(): void {
    let Unique_ID=localStorage.getItem("UniqueID")
    console.log("UNIQUE ID = "+ Unique_ID);
    
    // this.trainerService.gettrainer(trainerid).subscribe((data:any)=>{
    //   this.trainerData = JSON.parse(JSON.stringify(data))
    //   // console.log("Allocate details="+this.trainerData.Unique_ID);
    // })
    this.allocationService.getAllocationDetails(Unique_ID).subscribe((data:any)=>{
      this.profiles = JSON.parse(JSON.stringify(data))
      // console.log("Allocate details="+this.profile);
      
    });
  }
  }


