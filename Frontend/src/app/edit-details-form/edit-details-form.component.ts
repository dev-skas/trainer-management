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
  constructor(private router:Router, private trainerservice:TrainerService) { }

  ngOnInit(): void {
  

 
// edit trainer profile...................

  }

  edittrainer()
  {    
    this.trainerservice.edittrainer(this.userItem);   
    alert("Success");
    this.router.navigate(['profile']);
  }
  
// ...................

  
  



}
