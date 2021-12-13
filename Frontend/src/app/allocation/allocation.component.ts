import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.css']
})
export class AllocationComponent implements OnInit {
  training = {
    id :'',
    name:'',
    cname:'',
    cid:'',
    bid:'',
    time:'',
    sdate:'',
    edate:'',
    meetlink:''
  
  
  }
  constructor() { }

  ngOnInit(): void {
  }
  cidSelect(event:any){
    this.training.cid = event.target.value;

  }
  bidSelect(event:any){
    this.training.bid = event.target.value;

  }
  allocate(){
  
   console.log("Allocation details: "+JSON.stringify(this.training));

 }

}
