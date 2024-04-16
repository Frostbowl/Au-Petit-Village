import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [
    {name:'Asterix',
      image: 'assets/img/asterix.jpg',
      description: 'Asterix le gaulois, accompagné de son fidèle chien Idéfix',
      price: 17.99,
    },
    {
      name:'Obelix',
      image: 'assets/img/obelix.jpg',
      description: 'Obelix, souriant, toujours accompagné de son chien Idéfix',
      price: 19.99,
    },
    {
      name:'Falbala',
      image: 'assets/img/falbala.jpg',
      description: 'Falbala, la belle du village, fait chavirer les coeurs, surtout celui du pauvre Agécanonix',
      price: 18.99
    },
    {
      name:'Panoramix',
      image: 'assets/img/panoramix.jpg',
      description:'Le druide du village, il est celui qui détient le secret de la potion magique',
      price: 24.99
    }
  ]

  constructor() { }
}
