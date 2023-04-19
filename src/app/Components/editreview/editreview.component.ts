import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from 'src/app/Models/review';
import { ReviewService } from 'src/app/Services/review.service';

@Component({
  selector: 'app-editreview',
  templateUrl: './editreview.component.html',
  styleUrls: ['./editreview.component.css'],
})
export class EditreviewComponent implements OnInit {
  review: Review | undefined | any;
  review_id: number;
  review_data: Review;
  editReviewForm = this.formBuilder.group({
    review_text: '',
    review_rating: null,
    review_date: '',
    product_id: null,
    user_id: null,
  });
  constructor(
    private reviewService: ReviewService,
    private formBuilder: FormBuilder,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.review_id = this.actRoute.snapshot.params['id'];
    this.reviewService.getReview(this.review_id).subscribe((review) => {
      this.review_data = review;
    });
  }
  onSubmit() {
    this.reviewService
      .updateReview(this.review_data)
      .subscribe((result: any) => {
        console.log(result);
        this.router.navigate(['/adminview']);
      });
  }
}
