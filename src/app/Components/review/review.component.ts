import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from 'src/app/Models/review';
import { ReviewService } from 'src/app/Services/review.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';
import {
  GoogleApiService,
  UserInfo,
} from 'src/app/Services/google-api.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent implements OnInit {
  review: Review | any;
  reviews: Review[] = [];
  review_data: Review | undefined;
  product_id: number;
  product_data: Product | undefined;
  users: User[] = [];
  user_data: User | undefined;
  ratingOfProduct: number;
  userInfo?: UserInfo;
  anvData: number;

  addReviewForm = this.formBuilder.group({
    review_text: '',
    review_rating: null,
    product_id: null,
    user_id: null,
  });

  constructor(
    private reviewService: ReviewService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private productService: ProductService,
    private userService: UserService,
    private readonly googleApi: GoogleApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.reviewService
      .getReviews()
      .subscribe((result: Review[]) => (this.reviews = result));

    this.userService
      .getUsers()
      .subscribe((result: User[]) => (this.users = result));

    this.product_id = this.actRoute.snapshot.params['id'];
    this.productService.getProduct(this.product_id).subscribe((product) => {
      this.product_data = product;
    });

    this.googleApi.userProfileSubject.subscribe((info) => {
      this.userInfo = info;
    });
  }

  getStarArray(rating: number): number[] {
    return Array(rating).fill(0);
  }

  isLoggedIn(): boolean {
    return this.googleApi.isLoggedIn();
  }

  getuserId() {
    this.googleApi.userProfileSubject.subscribe((info) => {
      this.userInfo = info;
      this.userService.getUsers().subscribe((result: User[]) => {
        this.users = result;

        for (let anv of this.users) {
          if (this.userInfo?.info.email) {
            if (anv.user_email == this.userInfo.info.email) {
              this.anvData = anv.user_id;
            }
          }
        }
      });
    });
    return this.anvData;
  }

  onSubmit() {
    this.ngOnInit();
    this.review = {
      review_text: this.addReviewForm.value.review_text,
      review_rating: this.addReviewForm.value.review_rating,
      product_id: this.product_id,
      user_id: this.getuserId(),
    };

    this.reviewService.createReview(this.review).subscribe((result: any) => {
      console.log(result);
      this.ngOnInit();
    });
  }
}
