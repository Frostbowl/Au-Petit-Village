import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {
  transform(products: any[], filterName: string): any[] {
    if (!products || !filterName) {
      return products;
    }
    return products.filter((product) => 
      product.name.toLowerCase().includes(filterName.toLowerCase())
    );
  }
}