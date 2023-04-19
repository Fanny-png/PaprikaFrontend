import { HttpClient } from '@angular/common/http';
import { EmptyExpr } from '@angular/compiler';
import { Component } from '@angular/core';
import { EMPTY } from 'rxjs';
import { Discount } from 'src/app/Models/Discount';
import { Product } from 'src/app/Models/Product';
import { Product_category } from 'src/app/Models/product_category';
import { DiscountService } from 'src/app/Services/discount.service';
import { Product_categoryService } from 'src/app/Services/product-category.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = [];
  discounts: Discount[] = [];
  product_categories: Product_category[] = [];
  product_category: Product_category;
  searchText: '';
  characters = [
    'Ant-Man',
    'Aquaman',
    'Asterix',
    'The Atom',
    'The Avengers',
    'Batgirl',
    'Batman',
    'Batwoman',
  ];

  constructor(
    private http: HttpClient,
    private productService: ProductService,
    private discountService: DiscountService,
    private product_categoryService: Product_categoryService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((result: Product[]) => {
      this.products = result;
    });

    this.discountService.getDiscounts().subscribe((result: Discount[]) => {
      this.discounts = result;
    });

    this.product_categoryService
      .getProduct_categorys()
      .subscribe((result: Product_category[]) => {
        this.product_categories = result;
      });

    this.searchText = '';
    this.getSearchProducts();
  }
  newprice(price: number, discountAmount: number) {
    const percent = discountAmount / 100;
    const reduction = price * percent;
    const newPrice = price - reduction;
    return Math.floor(newPrice);
  }

  getSearchProducts() {
    if (this.searchText === '') {
      return this.products;
    } else {
      return this.products.filter((product) =>
        product.product_name
          .toLowerCase()
          .includes(this.searchText.toLowerCase())
      );
    }
  }

  isSingleCard(): boolean {
    return this.getSearchProducts().length === 1;
  }
}
