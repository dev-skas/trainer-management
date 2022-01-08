import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TrainersModel } from '../Models/trainers.model';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  userItem = new TrainersModel('','','','','','','','','','','','','',false,false,'','','','','','','');
  image:any;
  dropdownList:any = [];
  courses:any=[];
  dropdownSettings:IDropdownSettings = {};

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.dropdownList = [
      { id: 1, course: 'Full Stack Development' },
      { id: 2, course: 'Data Science & Analytics' },
      { id: 3, course: 'Cyber Security Analyst' },
      { id: 4, course: 'Robotic Process Automation' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'course',
      itemsShowLimit: 3,
      enableCheckAll:false,
      maxHeight:150
    };
  }
  
    onItemSelect(event:any) {
     
      this.courses.push(event.course) 
      this.userItem.courses = this.courses.toString();
      console.log(this.userItem.courses);
      
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
    formData.append('address',this.userItem.address)
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
