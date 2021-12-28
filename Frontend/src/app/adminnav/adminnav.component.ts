import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminnav',
  templateUrl: './adminnav.component.html',
  styleUrls: ['./adminnav.component.css']
})
export class AdminnavComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  logoutUser(){
    if(localStorage.getItem('tokenAdmin')){
      localStorage.removeItem('tokenAdmin');
    }
    if(localStorage.getItem('tokenUser')){
      localStorage.removeItem('tokenUser');
    }
    localStorage.removeItem('trainerid')
    this.router.navigate(['/'])
  }
}
