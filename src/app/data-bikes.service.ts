import { Injectable } from '@angular/core';
import { product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataBikesService {

  constructor() { }
  private bikes:product[]=[
    {
      productTitle: "Royal Enfield Classic 350",
      productImage: "https://imgd.aeplcdn.com/393x221/bw/models/royal-enfield-classic-350-single-channel-abs--bs-vi20200303121804.jpg?q=85",
      description: "Royal Enfield classic 350 is powered by 346 cc engine.This Bullet 350 engine generates a power of 19.36 PS @ 5250 rpm and a torque of 28 Nm @ 4000 rpm.The BS6 update of Royal Enfield Classic 350 will entice the younger audience",
      price: "Rs. 1,68,523"
    },

    {
      productTitle: "Jawa 42",
      productImage: "https://imgd.aeplcdn.com/393x221/bw/models/jawa-42-single-channel-abs--bs-vi20200302122453.jpg?q=85",
      description: "The motorcycle retains cycle parts such as telescopic front forks, preload-adjustable twin rear springs, a 280mm disc at the front, a 240mm rotor at the rear, and dual-channel ABS.The new Jawa 42 version 2.1 will be available.",
      price: "Rs 1,65,471"
    },

    {
      productTitle: "KTM 125 Duke",
      productImage: "https://imgd.aeplcdn.com/393x221/bw/models/ktm-125-duke-bs-vi-202120201207143206.jpg?q=85",
      description: "Mechanical specifications include a BS6-compliant, 199cc, single-cylinder engine that produces 14.3bhp and 12Nm of torque; same as the BS4 model. Apart from this, the motorcycle gets the same styling as the current-gen 200 Duke.",
      price: "Rs. 1.04 Lakh"
    },
    {
      productTitle:"Yamaha MT 15",
      productImage:"https://imgd.aeplcdn.com/310x174/bw/models/yamaha-mt-15-bs-vi20200204191522.jpg?q=75",
      description:"The MT-15 is a naked streetbike from Yamaha that is based on the company’s MT series. The MT-15 shares most of its underpinnings with its fully-faired sibling, the YZF R15 V3.0.",
      price:"Rs. 1,41,641"
    },
    {
      productTitle:"BMW G 310 GS",
      productImage:"https://imgd.aeplcdn.com/393x221/bw/models/bmw-g-310-gs-standard20201010112822.jpg?q=85",
      description:"The 2020 BMW G 310 GS features an all-LED headlamp as well as LED turn indicators that are different from the ones on the TVS Apache RR 310.",
      price:"Rs. 2,90,155"
    },
    {
      productTitle:"KTM 250 Adventure",
      productImage:"https://imgd.aeplcdn.com/393x221/bw/models/ktm-250-adventure-standard20191203140505.jpg?q=85",
      description:"The 250 Adventure is powered by a BS6-compliant 248cc, single-cylinder, liquid-cooled engine that produces 29.5bhp of power and 24Nm of peak torque.",
      price:"Rs. 2,54,806"
    }
  ];
  getBikesData():product[]{
    return this.bikes;
    }

}
