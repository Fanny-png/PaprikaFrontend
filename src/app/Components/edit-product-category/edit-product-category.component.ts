import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product_category } from 'src/app/Models/product_category';
import { Product_categoryService } from 'src/app/Services/product-category.service';

@Component({
  selector: 'app-edit-product-category',
  templateUrl: './edit-product-category.component.html',
  styleUrls: ['./edit-product-category.component.css'],
})
export class EditProductCategoryComponent implements OnInit {
  product_category: Product_category | undefined | any;
  product_category_id: number;
  product_category_data: Product_category;
  products_categorys: Product_category[] = [];

  addProductForm = this.formBuilder.group({
    category_name: '',
  });

  constructor(
    private product_categoryService: Product_categoryService,
    private formBuilder: FormBuilder,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.product_category_id = this.actRoute.snapshot.params['id'];
    this.product_categoryService
      .getProduct_category(this.product_category_id)
      .subscribe((product) => {
        this.product_category_data = product;
      });
  }

  onSubmit() {
    this.product_categoryService
      .updateProduct_category(this.product_category_data)
      .subscribe((result: any) => {
        console.log(result);
        this.router.navigate(['/adminview']);
      });
  }
}
