import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Models/Product';

@Pipe({
  name: 'appFilter',
  pure: false,
})
export class SearchPipe implements PipeTransform {
  /*transform(items: Product[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter((item: string) => {
      return item.toLowerCase().includes(searchText);
    });
  }*/

  transform(value: Product[], filterBy: string): Product[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : '';
    return filterBy
      ? value.filter(
          (product: Product) =>
            product.product_name.toLocaleLowerCase().indexOf(filterBy) !== -1
        )
      : value;
  }
}
