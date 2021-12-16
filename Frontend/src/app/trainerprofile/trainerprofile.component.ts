import {Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { TrainerService } from '../trainer.service';
import { TrainersModel } from '../Models/trainers.model';

@Component({
  selector: 'app-trainerprofile',
  templateUrl: './trainerprofile.component.html',
  styleUrls: ['./trainerprofile.component.css']
})
export class TrainerprofileComponent implements OnInit {
  profile = {
    name:'',
    email:'',
    phone:'',
    address:'',
    h_qualification:'',
    skillSet:'',
    company_name:'',
    designation:'',
    img:'',
    
  }


  constructor(private router: Router,private trainerservice:TrainerService) {}

  ngOnInit(): void {
    let trainerid=localStorage.getItem("findtrainerData")
    this.trainerservice.gettrainer(trainerid).subscribe((data:any)=>{
      this.profile = JSON.parse(JSON.stringify(data))
      

      
    })
  }
  }

 


