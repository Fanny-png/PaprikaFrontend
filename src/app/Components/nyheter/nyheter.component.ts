import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Discount } from 'src/app/Models/Discount';
import { Product } from 'src/app/Models/Product';
import { DiscountService } from 'src/app/Services/discount.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-nyheter',
  templateUrl: './nyheter.component.html',
  styleUrls: ['./nyheter.component.css'],
})
export class NyheterComponent {
  private url = 'Product';
  products: Product[] = [];
  discounts: Discount[] = [];

  constructor(
    private http: HttpClient,
    private productService: ProductService,
    private discountService: DiscountService
  ) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe((result: Product[]) => {
      this.products = result;
    });

    this.discountService.getDiscounts().subscribe((result: Discount[]) => {
      this.discounts = result;
    });
  }

  newprice(price: number, discountAmount: number) {
    const percent = discountAmount / 100;
    const reduction = price * percent;
    const newPrice = price - reduction;
    return Math.floor(newPrice);
  }
}
