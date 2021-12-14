import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-trainer',
  templateUrl: './search-trainer.component.html',
  styleUrls: ['./search-trainer.component.css']
})
export class SearchTrainerComponent implements OnInit {

  constructor() { }
  trainers:any=[
    {"id":1,"name":"Anu","course":"FSd"},
    {"id":2,"name":"Manu","course":".net"},
    {"id":3,"name":"Vishnu","course":"php"}


  ]
opts=[];
select:any

data:any;

  // Users = [{
  //     "id": 5440,
  //     "name": "Wanda Lynch",
  //     "email": "wanda.lynch@example.com"
  //   },
  //   {
  //     "id": 6228,
  //     "name": "Katrina Graves",
  //     "email": "katrina.graves@example.com"
  //   },
  //   {
  //     "id": 1654,
  //     "name": "Louis Daniels",
  //     "email": "louis.daniels@example.com"
  //   },
  //   {
  //     "id": 1631,
  //     "name": "Gavin Sullivan",
  //     "email": "gavin.sullivan@example.com"
  //   }]
  ngOnInit(): void {
  }
  getoption(option:any){
    // console.log(option.target.value)
this.select=option.target.value
console.log(this.select)



  // this.opts= this.trainers.select;

  // console.log(this.opts)

  }
}
