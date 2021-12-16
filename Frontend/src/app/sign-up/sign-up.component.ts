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
    
    
     }

  // On button click on sign up form, addUser() will get called.
  addUser(){
    this.authService.newTrainer(this.userItem);
    alert("Sign Up Successfull!");
    this.router.navigate(['login']);
  }

}
