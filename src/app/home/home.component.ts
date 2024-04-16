import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  sortOrder: string = 'croissant';

  constructor (private ProductsService: ProductsService) {}
  
  ngOnInit(): void {
    this.products = this.ProductsService.products
  }

}
