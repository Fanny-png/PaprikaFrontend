import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Discount } from 'src/app/Models/Discount';
import { Product } from 'src/app/Models/Product';
import { Product_category } from 'src/app/Models/product_category';
import { DiscountService } from 'src/app/Services/discount.service';
import { Product_categoryService } from 'src/app/Services/product-category.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  product: Product | undefined | any;
  product_id: number;
  product_data: Product;
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
    private router: Router,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.product_id = this.actRoute.snapshot.params['id'];
    this.productService.getProduct(this.product_id).subscribe((product) => {
      this.product_data = product;
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
    this.productService
      .updateProduct(this.product_data)
      .subscribe((result: any) => {
        console.log(result);
        this.router.navigate(['/adminview']);
      });
  }
}
