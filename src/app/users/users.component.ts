import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { from, Subscription } from 'rxjs';
import { FakedataService } from '../fakedata.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,OnDestroy {
  mySubscription:Subscription
  
  users;

  constructor(private fsObj:FakedataService,private router:Router) { }

  ngOnInit(): void { 
    this.mySubscription=this.fsObj.getUserIds().subscribe(
      usersData=>{
        
        this.users=usersData;
        console.log(this.users)
      },
      err=>{
        console.log("err in getting data",err)
      }
    )

  }

  onSelectId(id){
    this.router.navigateByUrl('users/'+id)

  }
  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }
}

