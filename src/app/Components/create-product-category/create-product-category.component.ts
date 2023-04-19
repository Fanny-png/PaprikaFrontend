import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Product_category } from 'src/app/Models/product_category';
import { Product_categoryService } from 'src/app/Services/product-category.service';

@Component({
  selector: 'app-create-product-category',
  templateUrl: './create-product-category.component.html',
  styleUrls: ['./create-product-category.component.css'],
})
export class CreateProductCategoryComponent {
  products_category: Product_category | any;

  products_categorys: Product_category[] = [];

  addProduct_categoryForm = this.formBuilder.group({
    category_name: '',
  });

  constructor(
    private product_categoryService: Product_categoryService,

    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.product_categoryService
      .getProduct_categorys()
      .subscribe((result: Product_category[]) => {
        this.products_categorys = result;
        console.log(result);
      });
  }

  onSubmit() {
    console.log(this.addProduct_categoryForm.value);
    this.products_category = this.addProduct_categoryForm.value;
    this.product_categoryService
      .createProduct_category(this.products_category)
      .subscribe((result: any) => {
        console.log(result);
        this.router.navigate(['/adminview']);
      });
  }
}
