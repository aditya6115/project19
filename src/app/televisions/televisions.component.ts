import { Component, OnInit } from '@angular/core';
import { DataTelevisionsService } from '../data-televisions.service';
import { product } from '../models/product.model';

@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent {
  televisions:product[]=[];
    
  constructor(private dsObj:DataTelevisionsService){
     
   }

  ngOnInit(){
     this.televisions =this.dsObj.getTelevisionsData();
   }


}
