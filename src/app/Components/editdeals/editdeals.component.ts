import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Discount } from 'src/app/Models/Discount';
import { DiscountService } from 'src/app/Services/discount.service';

@Component({
  selector: 'app-editdeals',
  templateUrl: './editdeals.component.html',
  styleUrls: ['./editdeals.component.css'],
})
export class EditdealsComponent implements OnInit {
  discount: Discount;
  discount_id: number;
  discount_data: Discount;
  editDiscountForm = this.formBuilder.group({
    discount_name: '',
    discount_percent: null,
  });
  constructor(
    private discountService: DiscountService,
    private formBuilder: FormBuilder,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.discount_id = this.actRoute.snapshot.params['id'];
    this.discountService.getDiscount(this.discount_id).subscribe((result) => {
      this.discount_data = result;
    });
  }

  onSubmit() {
    this.discountService
      .updateDiscount(this.discount_data)
      .subscribe((result: any) => {
        console.log(result);
        this.router.navigate(['/adminview']);
      });
  }
}
