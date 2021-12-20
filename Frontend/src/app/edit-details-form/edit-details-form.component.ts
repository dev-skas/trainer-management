import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainerService } from '../trainer.service';
@Component({
  selector: 'app-edit-details-form',
  templateUrl: './edit-details-form.component.html',
  styleUrls: ['./edit-details-form.component.css']
})
export class EditDetailsFormComponent implements OnInit {
  userItem = {
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

  constructor(public router:Router, public trainerservice:TrainerService) { }

  ngOnInit(): void {
  
    let trainerid=localStorage.getItem("findtrainerData")
    this.trainerservice.gettrainer(trainerid).subscribe((data)=>{

      this.userItem = JSON.parse(JSON.stringify(data))

    
      
    })

 
// edit trainer profile...................

  }

  edittrainer()
  {    

    this.trainerservice.edittrainer(this.userItem);  
    this.router.navigate(['profile']);
  }
  
// ...................

  
  



}
