// import { analyzeFile } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-trainer-dashboard',
  templateUrl: './trainer-dashboard.component.html',
  styleUrls: ['./trainer-dashboard.component.css']
})
export class TrainerDashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logoutUser(){
    if(localStorage.getItem('tokenAdmin')){
      localStorage.removeItem('tokenAdmin');
    }
    if(localStorage.getItem('tokenUser')){
      localStorage.removeItem('tokenUser');
    }
    localStorage.removeItem('findtrainerData')
    localStorage.removeItem('UniqueID')
    this.router.navigate(['/'])
  }
}
