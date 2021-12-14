import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
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
    password:'',
    re_password:''
  }
  userData:any;
  constructor() { }

  ngOnInit(): void {
  }
  // courseChange() will detect a change in event click of select tag, so we can get the course value/course name and
  //  set the course value/name to courses of userItem array: -
  courseChange(event:any){
    // console.log(event.target.value);
    this.userItem.courses = event.target.value;
     
  }



  // On button click on sign up form, addUser() will get called.
  addUser(){
     // the object is converted to string and the 3rd parameter ensures that output will pretty print with spaces
    console.log("Trainer sign Up details: "+JSON.stringify(this.userItem,null," "));
    
  }

}
