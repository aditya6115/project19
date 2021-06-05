import { Component, OnInit } from '@angular/core';
import { DataBikesService } from '../data-bikes.service';
import { product } from '../models/product.model';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent {
  bikes:product[]=[];
    
  constructor(private dsObj:DataBikesService){
     
   }

  ngOnInit(){
     this.bikes =this.dsObj.getBikesData();
   }


}
