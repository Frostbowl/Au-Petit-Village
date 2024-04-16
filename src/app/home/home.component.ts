import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

export interface Product{
  id:number;
  name:string;
  image: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  sortOrder: string = 'croissant';
  filterName: string = "";

  constructor (private ProductsService: ProductsService) {}
  
  ngOnInit(): void {
    this.products = this.ProductsService.getProducts();
  }

}
