import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { FakedataService } from '../fakedata.service';
import {User} from '../models/user.model'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit,OnDestroy {
  mySubscription:Subscription
  users:User[]=[];
  colors;
  constructor(private fsObj:FakedataService) { }
  ngOnInit(): void { 
    this.mySubscription=this.fsObj.getColors().subscribe(
      colorsData=>{
        this.colors=colorsData;
      },
      err=>{
        console.log("err in getting data",err)
      }
    )
    this.fsObj.getUsers().subscribe(
      usersData=>{
        this.users=usersData;
        console.log(this.users)
      }
    )
  }
  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }
}
