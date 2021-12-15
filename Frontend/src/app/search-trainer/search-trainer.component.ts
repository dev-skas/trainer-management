import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllocationService } from '../allocation.service';
import { TrainersModel } from '../Model/trainer.Model';
@Component({
  selector: 'app-search-trainer',
  templateUrl: './search-trainer.component.html',
  styleUrls: ['./search-trainer.component.css']
})
export class SearchTrainerComponent implements OnInit {

  constructor(private _allocate:AllocationService,private _router:Router) {this.trainers=[]; }
  trainers:TrainersModel[];

data:any;

  ngOnInit(): void {
    this._allocate.gettrainers().subscribe((data)=>{
      
      this.trainers=JSON.parse(JSON.stringify(data));
      console.log(this.trainers);
    })
  }
  allocate(item:any){
    // localStorage.setItem("trainerid",item._id.toString());
    console.log("ys")
    this._router.navigate(['admin/allocate'])
    
  }
}
