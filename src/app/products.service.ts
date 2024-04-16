import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  products: Product[]= [
    { id: 1,
      name:'Asterix',
      image: 'assets/img/asterix.jpg',
      description: 'Asterix le gaulois, accompagné de son fidèle chien Idéfix',
      price: 17.99,
    },
    { id:2,
      name:'Obelix',
      image: 'assets/img/obelix.jpg',
      description: 'Obelix, souriant, toujours accompagné de son chien Idéfix',
      price: 19.99,
    },
    { id:3,
      name:' Falbala',
      image: 'assets/img/falbala.jpg',
      description: 'Falbala, la belle du village, fait chavirer les coeurs, surtout celui du pauvre Agécanonix',
      price: 18.99
    },
    { id:4,
      name:' Panoramix ',
      image: 'assets/img/panoramix.jpg',
      description:'Le druide du village, il est celui qui détient le secret de la potion magique',
      price: 24.99
    }
  ]

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product | undefined {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new Error(`Product with ID ${id} not found`);
    }
    return product;
  }

}
