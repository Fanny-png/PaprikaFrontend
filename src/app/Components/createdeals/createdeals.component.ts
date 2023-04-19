import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Discount } from 'src/app/Models/Discount';
import { DiscountService } from 'src/app/Services/discount.service';

@Component({
  selector: 'app-createdeals',
  templateUrl: './createdeals.component.html',
  styleUrls: ['./createdeals.component.css'],
})
export class CreatedealsComponent {
  discount: Discount | any;
  addDiscountForm = this.formBuilder.group({
    discount_name: '',
    discount_percent: null,
  });

  constructor(
    private discountService: DiscountService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  onSubmit() {
    console.log(this.addDiscountForm.value);
    this.discount = this.addDiscountForm.value;
    this.discountService
      .createDiscount(this.discount)
      .subscribe((result: any) => {
        console.log(result);
        this.router.navigate(['/adminview']);
      });
  }
}
