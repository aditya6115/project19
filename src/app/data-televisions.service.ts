import { Injectable } from '@angular/core';
import { product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataTelevisionsService {

  constructor() { }
  private televisions:product[]=[
    {
      productTitle: "Samsung 58Q60T",
      productImage: "https://www.reliancedigital.in/medias/Samsung-58Q60T-Televisions-491694884-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNDczNzZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDAyL2hlNC85NDQwNjI3ODg0MDYyLmpwZ3wxZjg1ZGU2ZTllNjNlMmRkMjIwYzc0ZmJhMDUxMGU5ZjBmMzVhOGYyZmE4NjdjNjA3NWQ0ODI5ZjI1ZThmZWY4",
      description: " An intuitive Smart TV interface learns what you like and suggests exciting new content. And if you’re into gaming, Game Enhancer automatically neutralizes annoyances like tearing and stuttering.",
      price: "₹93,990"
    },

    {
      productTitle: "Sony X8000H",
      productImage: "https://www.reliancedigital.in/medias/Sony-43X8000H-Televisions-491898083-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3NzA1MDR8aW1hZ2UvanBlZ3xpbWFnZXMvaDQ3L2hmMC85NDQwNjQxNTE1NTUwLmpwZ3wyYzE2OTYyZjEyMGZlYzNiYzEwYjFiNDViM2RmMTM3ZTY0YzE1NGY3Nzg4ZDRiOWVjZGU4OTYyMjdkNzNiNDhl",
      description: "Powerful X1 processor uses advanced algorithms to cut noise and boost detail. With an even clearer 4K signal, everything you watch is closer to 4K resolution, full of life-like colour and contrast.",
      price: "₹66,657"
    },

    {
      productTitle: "LG UN7350",
      productImage: "https://www.reliancedigital.in/medias/LG-55UN7350-Television-491897998-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMTM4ODV8aW1hZ2UvanBlZ3xpbWFnZXMvaDE0L2g0ZS85NDQxOTM5NzUwOTQyLmpwZ3w5ZjhlNDgxZTkwNjllMDJkNThjM2EwZTFiNWYwMDFiZmUxOTYwMGU0OTkzNGZlODQ5ZDRiZmU3MTIzMzgwZTU4",
      description: "LG UHD TV was made to entertain by taking everything you watch to a new level. Whether it's cinema, sports, or games, it delivers real 4K images with vivid color and fine detail. Enjoy more realistic images in four times the resolution.",
      price: "₹69,490"
    },
    {
      productTitle: "Samsung 58Q60T",
      productImage: "https://www.reliancedigital.in/medias/Samsung-58Q60T-Televisions-491694884-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNDczNzZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDAyL2hlNC85NDQwNjI3ODg0MDYyLmpwZ3wxZjg1ZGU2ZTllNjNlMmRkMjIwYzc0ZmJhMDUxMGU5ZjBmMzVhOGYyZmE4NjdjNjA3NWQ0ODI5ZjI1ZThmZWY4",
      description: " An intuitive Smart TV interface learns what you like and suggests exciting new content. And if you’re into gaming, Game Enhancer automatically neutralizes annoyances like tearing and stuttering.",
      price: "₹93,990"
    },

    {
      productTitle: "Sony X8000H",
      productImage: "https://www.reliancedigital.in/medias/Sony-43X8000H-Televisions-491898083-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3NzA1MDR8aW1hZ2UvanBlZ3xpbWFnZXMvaDQ3L2hmMC85NDQwNjQxNTE1NTUwLmpwZ3wyYzE2OTYyZjEyMGZlYzNiYzEwYjFiNDViM2RmMTM3ZTY0YzE1NGY3Nzg4ZDRiOWVjZGU4OTYyMjdkNzNiNDhl",
      description: "Powerful X1 processor uses advanced algorithms to cut noise and boost detail. With an even clearer 4K signal, everything you watch is closer to 4K resolution, full of life-like colour and contrast.",
      price: "₹66,657"
    },

    {
      productTitle: "LG UN7350",
      productImage: "https://www.reliancedigital.in/medias/LG-55UN7350-Television-491897998-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMTM4ODV8aW1hZ2UvanBlZ3xpbWFnZXMvaDE0L2g0ZS85NDQxOTM5NzUwOTQyLmpwZ3w5ZjhlNDgxZTkwNjllMDJkNThjM2EwZTFiNWYwMDFiZmUxOTYwMGU0OTkzNGZlODQ5ZDRiZmU3MTIzMzgwZTU4",
      description: "LG UHD TV was made to entertain by taking everything you watch to a new level. Whether it's cinema, sports, or games, it delivers real 4K images with vivid color and fine detail. Enjoy more realistic images in four times the resolution.",
      price: "₹69,490"
    },
  ];
  getTelevisionsData():product[]{
    return this.televisions;
    }
}
