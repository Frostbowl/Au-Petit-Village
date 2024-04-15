import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {

  transform(products: any[]): any[] {
    return products.sort ((a:any, b:any)=> {
      if (a.price < b.price) {return -1}
      else if (a.price > b.price) {return 1}
      else return 0;
    });
  }

}
