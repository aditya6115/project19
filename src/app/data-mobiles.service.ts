import { Injectable } from '@angular/core';
import { product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataMobilesService {

  constructor() { }
  private mobiles:product[]=[
    {
      productImage: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1032706.jpg&w=272&h=272&c=sc&poi=face&q=85",
      productTitle: "Vanilla Ice Cream V",
      description: "No-cook, no eggs, made with half-and-half and cream.",
      price: "₹249"
    },
    {
      productImage: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F435381.jpg&w=272&h=272&c=sc&poi=face&q=85",
      productTitle: "Ice Cream Base",
      description: "A custard-style ice cream base that any number of flavors can be added to.",
      price: "₹199"
    },
    {
      productImage: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5571405.jpg&w=272&h=272&c=sc&poi=face&q=85",
      productTitle: "Vegan Horchata Ice Cream",
      description: "Flavorful rice milk is mixed with coconut cream then churned to give delight.",
      price: "₹349"
    },
    {
      productImage: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1586127.jpg&w=272&h=272&c=sc&poi=face&q=85",
      productTitle: "Super Lemon Ice Cream",
      description: "Fresh Lemon Ice Cream is like no other ice cream you’ve ever had.",
      price: "₹299"
    },
    {
      productImage: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F2170022.jpg&w=272&h=272&c=sc&poi=face&q=85",
      productTitle: "Matcha Green Tea Ice Cream",
      description: "The Japanese green tea ice cream is not as creamy, It is sweet",
      price: "₹399"
    },
    {
      productImage: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F815784.jpg&w=272&h=272&c=sc&poi=face&q=85",
      productTitle: "Strawberry Ice Cream",
      description: "Strawberry ice cream is a flavor of ice cream made with strawberry.",
      price: "199"
    }

  ];
  getMobilesData():product[]{
    return this.mobiles;
  }

}
