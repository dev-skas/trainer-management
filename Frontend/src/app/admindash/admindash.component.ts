import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { AllocationService } from '../allocation.service';
import { TrainersModel } from '../Model/trainer.Model';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
  
export class AdmindashComponent implements OnInit {


  trainers: TrainersModel[];
  
  constructor(private _allocate: AllocationService, private _router: Router)
  {
    this.trainers = [];
  }

  ngOnInit(): void {
    
    this._allocate.gettrainers().subscribe((data)=>{
      
      this.trainers=JSON.parse(JSON.stringify(data));
      console.log(this.trainers);
    })
  }


  
    approve(trainer:any){
      localStorage.setItem("trainerid",trainer._id.toString());
      this._allocate.approvetrainer(trainer);
      



    }

  }

