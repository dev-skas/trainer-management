import {Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { TrainerService } from '../trainer.service';


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
    img: '',
    courseid:'',
    batchid:'',
    scheduletime:'',
    startdate:'',
    enddate:'',
    venue:'',
    courses:'',
    isAllocated:'',
    Unique_ID:''
    
  }
  // The below img is to get the image name from db & store to display img in profile page
  img:any;

  constructor(private router: Router,private trainerservice:TrainerService) {}

  ngOnInit(): void {
    let trainerid=localStorage.getItem("findtrainerData")
    this.trainerservice.gettrainer(trainerid).subscribe((data:any)=>{
      this.profile = JSON.parse(JSON.stringify(data))
      this.img = this.profile.img;
      localStorage.setItem("UniqueID",this.profile.Unique_ID)
    })
  }
  }