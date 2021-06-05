import { Component, OnInit } from '@angular/core';
import { DataMobilesService } from '../data-mobiles.service';
import { product } from '../models/product.model';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent {
  mobiles:product[]=[];
    
  constructor(private dsObj:DataMobilesService){
     
   }
   ngOnInit(){
    this.mobiles =this.dsObj.getMobilesData();
  }

}
