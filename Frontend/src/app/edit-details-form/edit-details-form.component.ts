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
    _id:'' 
  } 

  // userImage is just to assign empty string value to file input to avoid errors.
  userImage ={
    img:''
  }


  // image is used to store the file selected in file input:
  image:any;

  constructor(public router:Router, public trainerservice:TrainerService) { }

  ngOnInit(): void {
  
    let trainerid=localStorage.getItem("findtrainerData")
    this.trainerservice.gettrainer(trainerid).subscribe((data)=>{

      this.userItem = JSON.parse(JSON.stringify(data))

    })
  }
  // Check the event to get value of selected file to store in image variable:
  onFileSelect(event:any){
    if(event.target.files.length>0){
      const file = event.target.files[0];
      this.image = file;
    }
  }

  // Edit Trainer:
  edittrainer()
  {    

    const formData = new FormData();
    formData.append('_id',this.userItem._id)
    formData.append('name',this.userItem.name)
    formData.append('email',this.userItem.email)
    formData.append('phone',this.userItem.phone)
    formData.append('address',this.userItem.address)
    formData.append('h_qualification',this.userItem.h_qualification)
    formData.append('skillSet',this.userItem.skillSet)
    formData.append('company_name',this.userItem.company_name)
    formData.append('designation',this.userItem.designation)
    formData.append('img',this.image); //img selected in file inputfor multer
    formData.append('dbImage',this.userItem.img) // if no file selected then this is img already in DB
    this.trainerservice.edittrainer(formData);
    alert("Edit Success!")


//     this.trainerservice.edittrainer(this.userItem);  

    this.router.navigate(['profile']);
  }
  
// ...................

  
  



}
