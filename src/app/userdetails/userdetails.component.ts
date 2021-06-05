import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakedataService } from '../fakedata.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  
  userObj;
  constructor(private ar:ActivatedRoute,private fs:FakedataService) { }

  ngOnInit(): void {
    let id=this.ar.snapshot.params.id;
    this.fs.getUserById(id).subscribe(
      obj=>{
        console.log("obj is ",obj)
        this.userObj=obj;
      },
      err=>{
        console.log("err in reading post",err)
      }
    )
}




}

