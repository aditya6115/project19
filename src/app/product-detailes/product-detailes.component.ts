import { Component, Input,EventEmitter,Output} from '@angular/core';
import { product } from '../models/product.model';

@Component({
  selector: 'app-product-detailes',
  templateUrl: './product-detailes.component.html',
  styleUrls: ['./product-detailes.component.css']
})
export class ProductDetailesComponent  {

  @Input() productObj:product;

  @Output() myEvent=new EventEmitter();

  sendProductDetailsToparent(productTitle){
      this.myEvent.emit(productTitle);
  }
}
