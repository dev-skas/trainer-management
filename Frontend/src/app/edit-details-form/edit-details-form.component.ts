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
    courses:'',
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

  courseChange(event:any){
    // console.log(event.target.value);
    this.userItem.courses = event.target.value;
     
  }
  Edit(){
    console.log("The edit details: " +JSON.stringify(this.userItem));
    
  }



}
