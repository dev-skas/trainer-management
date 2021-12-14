import {
  Component,
  OnInit
} from '@angular/core';
import {
  profileModel
} from './profile.model';
import {
  Router
} from '@angular/router';
@Component({
  selector: 'app-trainerprofile',
  templateUrl: './trainerprofile.component.html',
  styleUrls: ['./trainerprofile.component.css']
})
export class TrainerprofileComponent implements OnInit {
  title: string = "Profile";
  // profile: profileModel[]=[];
  profile: any = [{
    Name: "meera",
    Email: "mera@gmail.com",
    Phone: "123545",
    Address: "hhhhh",
    HighestQualification: "btech",
    CurrentCompanyName: "ict",
    Skillset: "angular"
  }];


  constructor(private router: Router) {}

  ngOnInit(): void {}

}
