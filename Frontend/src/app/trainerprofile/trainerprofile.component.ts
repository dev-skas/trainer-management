import {Component, OnInit} from '@angular/core';
import {profileModel} from './profile.model';
import { Router} from '@angular/router';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-trainerprofile',
  templateUrl: './trainerprofile.component.html',
  styleUrls: ['./trainerprofile.component.css']
})
export class TrainerprofileComponent implements OnInit {
  title: string = "Profile";
  profile: profileModel[]=[];
  // profile: any = [{
  //   Name: "meera",
  //   Email: "mera@gmail.com",
  //   Phone: "123545",
  //   Address: "hhhhh",
  //   HighestQualification: "btech",
  //   CurrentCompanyName: "ict",
  //   Skillset: "angular"
  // }];


  constructor(private router: Router,private trainerservice:TrainerService) {}

  ngOnInit(): void {
    let trainerid=localStorage.getItem("findtrainerData")
    this.trainerservice.gettrainer(trainerid).subscribe((data:any)=>{
      this.profile=JSON.parse(JSON.stringify(data));
  })
  }
  }

 


