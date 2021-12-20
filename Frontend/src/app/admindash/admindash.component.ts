import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { AllocationService } from '../allocation.service';
import { TrainersModel } from '../Models/trainers.model';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {

  trainerdtls = {
    Unique_ID :'',
    emptype:''
  
  
  }
  trainers:TrainersModel[];
  constructor(private _allocate:AllocationService,private _router:Router) {  this.trainers=[];
  }

  ngOnInit(): void {
    
    this._allocate.gettrainers().subscribe((data)=>{
      
      this.trainers=JSON.parse(JSON.stringify(data));
      console.log(this.trainers);
    })
    }
    approve(trainer:any,trainerdtls:any){
      // localStorage.setItem("trainerid",trainer._id.toString());
      this._allocate.approvetrainer(trainer,this.trainerdtls)
      .subscribe((data)=>{
        console.log("approved")
        console.log(trainerdtls)
      })   


    }
    reject(trainer:any){
      console.log(trainer._id);

this._allocate.rejecttrainer(trainer._id);

this._router.navigate(['admin']);

    }

  }

