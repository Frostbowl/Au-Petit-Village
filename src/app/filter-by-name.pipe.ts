import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './products.service';

@Pipe({
  name: 'filterByName',
})
export class FilterByNamePipe implements PipeTransform {
  transform(products: Product[], filterName: string): Product[] {
    if (!products || !filterName) {
      return products;
    }
    return products.filter((product) => 
      product.name.toLowerCase().includes(filterName.toLowerCase())
    );
  }
}