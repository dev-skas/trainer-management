import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-details-form',
  templateUrl: './edit-details-form.component.html',
  styleUrls: ['./edit-details-form.component.css']
})
export class EditDetailsFormComponent implements OnInit {
  userItem = {
    name:'nnn',
    email:'nn',
    phone:'nn',
    address:'nn',
    h_qualification:'nn',
    skillSet:'nn',
    company_name:'nn',
    designation:'nn',
    courses:'',
    img:'',
    
  }
  constructor() { }

  ngOnInit(): void {
  }
  courseChange(event:any){
    // console.log(event.target.value);
    this.userItem.courses = event.target.value;
     
  }
  Edit(){
    console.log("The edit details: " +JSON.stringify(this.userItem));
    
  }

}
