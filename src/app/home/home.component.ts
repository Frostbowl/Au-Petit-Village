import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../products.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  selectedProductId: number = 1;
  sortOrder: string = 'croissant';
  filterName: string = "";

  constructor (private ProductsService: ProductsService, private router: Router) {}
  
  ngOnInit(): void {
    this.products = this.ProductsService.getProducts();
  }

  discoverProduct(productId: number){
    this.selectedProductId = productId;
    this.router.navigate(['/product', productId])
  }

}
