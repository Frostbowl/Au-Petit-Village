import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../products.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  product?: Product;

  constructor(
    private ProductsService: ProductsService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = Number(params["id"]);
      if (productId) {
        this.product = this.ProductsService.getProduct(productId);
      } else {
        console.error("Product ID not found in route parameters.");
      }
    });
  }
}
