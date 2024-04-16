import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {
  transform(products: any[], sortOrder: string): any[] {
    if (!products || !products.length) return [];
    if (sortOrder === 'croissant') {
      return products.slice().sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'decroissant') {
      return products.slice().sort((a, b) => b.price - a.price);
    } else {
      return products;
    }
  }
}
