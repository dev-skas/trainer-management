import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TrainersModel } from '../Models/trainers.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  userItem = new TrainersModel('','','','','','','','','','','','','',false,false,'','','','','','','');
  image:any;
  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }


  // courseChange() will detect a change in event click of select tag, so we can get the course value/course name 
  // and set the course value/name to courses of userItem array: -
  courseChange(event:any){
    // console.log(event.target.value); // testing
    this.userItem.courses = event.target.value;
  }

  onFileSelect(event:any){
    if(event.target.files.length>0){
      const file = event.target.files[0];
      this.image = file;
    }  
  }

  // On button click on sign up form, addUser() will get called.
  addUser(){
    const formData = new FormData();
    formData.append('name',this.userItem.name)
    formData.append('email',this.userItem.email)
    formData.append('phone',this.userItem.phone)
    formData.append('address',this.userItem.phone)
    formData.append('h_qualification',this.userItem.h_qualification)
    formData.append('skillSet',this.userItem.skillSet)
    formData.append('company_name',this.userItem.company_name)
    formData.append('designation',this.userItem.designation)
    formData.append('courses',this.userItem.courses)
    formData.append('password',this.userItem.password)
    formData.append('re_password',this.userItem.re_password)
    formData.append('img',this.image);

    this.authService.newTrainer(formData);
    alert("Sign Up Successfull!");
    this.router.navigate(['login']);
  }

}
