import { Component, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Discount } from 'src/app/Models/Discount';
import { Product } from 'src/app/Models/Product';
import { Product_category } from 'src/app/Models/product_category';

import { Product_categoryService } from 'src/app/Services/product-category.service';
import { ProductService } from 'src/app/Services/product.service';

import { Review } from 'src/app/Models/review';
import { DiscountService } from 'src/app/Services/discount.service';
import { ReviewService } from 'src/app/Services/review.service';
import { UserService } from 'src/app/Services/user.service';

import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-create',
  templateUrl: './createProduct.component.html',
  styleUrls: ['./createProduct.component.css'],
})
export class CreateComponent {
  product: Product | any;
  products: Product[] = [];
  products_categorys: Product_category[] = [];

  discounts: Discount[] = [];

  addProductForm = this.formBuilder.group({
    product_name: '',
    product_desc: '',
    product_price: null,
    product_image: '',
    product_category_id: null,
    discount_id: null,
  });

  constructor(
    private productService: ProductService,
    private product_categoryService: Product_categoryService,

    private discountService: DiscountService,

    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((result: Product[]) => {
      this.products = result;
    });

    this.product_categoryService
      .getProduct_categorys()
      .subscribe((result: Product_category[]) => {
        this.products_categorys = result;
        console.log(result);
      });

    this.discountService.getDiscounts().subscribe((result: Discount[]) => {
      this.discounts = result;
    });
  }

  onSubmit() {
    console.log(this.addProductForm.value);
    this.product = this.addProductForm.value;
    this.productService.createProduct(this.product).subscribe((result: any) => {
      console.log(result);
      this.router.navigate(['/adminview']);
    });
  }
}
