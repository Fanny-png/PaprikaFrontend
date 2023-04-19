import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Discount } from 'src/app/Models/Discount';
import { Product } from 'src/app/Models/Product';
import { Product_category } from 'src/app/Models/product_category';
import { Review } from 'src/app/Models/review';
import { User } from 'src/app/Models/user';
import { DiscountService } from 'src/app/Services/discount.service';
import { Product_categoryService } from 'src/app/Services/product-category.service';
import { ProductService } from 'src/app/Services/product.service';
import { ReviewService } from 'src/app/Services/review.service';
import { UserService } from 'src/app/Services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css'],
})

// export class AdminviewComponent implements OnInit {
//   product_id: any;
//   product_data: Product | undefined;
//   constructor(
//    private productService: ProductService,
//    private router: Router,
//    private actRoute: ActivatedRoute
//    ) {}

//   ngOnInit() {
//     this.product_id = this.actRoute.snapshot.params['id'];
//     this.productService.getProduct(this.product_id).subscribe((product) => {
//       this.product_data = product;
//   });
//   }
// }
export class AdminviewComponent {
  product: Product;
  products: Product[] = [];
  user: User;
  users: User[] = [];
  userToView?: User;
  review: Review;
  reviews: Review[] = [];
  reviewToView?: Review;
  adminviewService: any;
  id: Number;
  discounts: Discount[] = [];
  discount: Discount;
  product_categorys: Product_category[] = [];
  product_category: Product_category;

  constructor(
    private http: HttpClient,
    private productService: ProductService,
    private userService: UserService,
    private reviewService: ReviewService,
    private discountService: DiscountService,
    private product_categoryService: Product_categoryService
  ) {}

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe((result: Product[]) => (this.products = result));
    this.userService
      .getUsers()
      .subscribe((result: User[]) => (this.users = result));
    this.reviewService
      .getReviews()
      .subscribe((result: Review[]) => (this.reviews = result));
    this.discountService
      .getDiscounts()
      .subscribe((result: Discount[]) => (this.discounts = result));

    this.product_categoryService
      .getProduct_categorys()
      .subscribe(
        (result: Product_category[]) => (this.product_categorys = result)
      );
  }

  public delete(id: number | undefined) {
    this.productService.deleteProduct(id).subscribe((result: any) => {
      this.product = result;
      console.log(result);
      this.ngOnInit();
    });
  }

  public userDelete(id: number | null) {
    this.userService.deleteUser(id).subscribe((result: any) => {
      this.user = result;
      console.log(result);
      this.ngOnInit();
    });
  }

  public reviewDelete(id: number | undefined) {
    this.reviewService.deleteReview(id).subscribe((result: any) => {
      this.review = result;
      console.log(result);
      this.ngOnInit();
    });
  }

  public discountDelete(id: number) {
    this.discountService.deleteDiscount(id).subscribe((result: any) => {
      this.review = result;
      console.log(result);
      this.ngOnInit();
    });
  }

  public product_categoryDelete(id: number) {
    this.product_categoryService
      .deleteProduct_category(id)
      .subscribe((result: any) => {
        this.review = result;
        console.log(result);
        this.ngOnInit();
      });
  }
}
