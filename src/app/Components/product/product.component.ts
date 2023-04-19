import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Discount } from 'src/app/Models/Discount';
import { Product } from 'src/app/Models/Product';
import { DiscountService } from 'src/app/Services/discount.service';
import { ProductService } from 'src/app/Services/product.service';
import { Review } from 'src/app/Models/review';
import { ReviewService } from 'src/app/Services/review.service';
import { shopping_session } from 'src/app/Models/Shopping_session';
import { ShoppingSessionService } from 'src/app/Services/shopping-session.service';
import { Cart_ItemService } from 'src/app/Services/cart-item.service';
import { cart_item } from 'src/app/Models/cart_item';
import { GoogleApiService } from 'src/app/Services/google-api.service';
import { SharedService } from 'src/app/Services/shared-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product_id: any;
  product_data: Product;
  discounts: Discount[] = [];
  reviews: Review[] = [];
  shoppingSessions: shopping_session[] = [];
  shoppingSession: shopping_session;
  shoppingSession1: shopping_session;
  cart_items: cart_item[] = [];
  cart_item: cart_item | any;

  totalReviews: number;
  averageRating: number;

  constructor(
    private productService: ProductService,
    private actRoute: ActivatedRoute,
    private discountService: DiscountService,
    private reviewService: ReviewService,
    private shoppingsessionService: ShoppingSessionService,
    private cart_itemService: Cart_ItemService,
    private readonly googleApi: GoogleApiService,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.product_id = this.actRoute.snapshot.params['id'];
    this.productService.getProduct(this.product_id).subscribe((product) => {
      this.product_data = product;
    });
    this.discountService.getDiscounts().subscribe((result: Discount[]) => {
      this.discounts = result;
    });

    this.reviewService.getReviews().subscribe((reviews: Review[]) => {
      this.reviews = reviews.filter(
        (review) => review.product_id === parseInt(this.product_id)
      );
      this.totalReviews = this.reviews.length;
    });

    this.reviewService.getReviews().subscribe((reviews: Review[]) => {
      const filteredReviews = reviews.filter(
        (review) => review.product_id === parseInt(this.product_id)
      );
      this.totalReviews = filteredReviews.length;

      const totalRating = filteredReviews.reduce(
        (acc, review) => acc + review.review_rating,
        0
      );
      this.averageRating = totalRating / this.totalReviews;
    });

    this.cart_itemService.getcart_items().subscribe((result: cart_item[]) => {
      this.cart_items = result;
      const totalProducts = this.getTotalProducts(this.cart_items);
      this.sharedService.updateTotalProducts(totalProducts);
    });
  }

  newprice(price: number, discountAmount: number) {
    const percent = discountAmount / 100;
    const reduction = price * percent;
    const newPrice = price - reduction;
    return Math.floor(newPrice);
  }

  isLoggedIn(): boolean {
    return this.googleApi.isLoggedIn();
  }

  getTotalProducts(cartItems: cart_item[]): number {
    let totalProducts = 0;
    for (let i = 0; i < cartItems.length; i++) {
      totalProducts += 1;
    }
    return totalProducts;
  }

  addProduct() {
    if (
      this.shoppingsessionService
        .getshopping_sessions()
        .subscribe((result: shopping_session[]) => {
          this.shoppingSessions = result;
          console.log(this.shoppingSessions);
          if (this.shoppingSessions.length === 0) {
            console.log('tomt');
            this.shoppingSession1 = {
              shopping_session_id: null,
              total: 0,
              user_id: null,
            };
            this.shoppingsessionService
              .createshopping_session(this.shoppingSession1)
              .subscribe((result: any) => {
                this.shoppingSession1 = result;
                this.cart_item = {
                  quantity: 1,
                  shopping_session_id:
                    this.shoppingSession1.shopping_session_id,
                  product_id: parseInt(this.product_id),
                };
                this.cart_itemService
                  .createcart_item(this.cart_item)
                  .subscribe((result: any) => {
                    this.cart_item = result;
                    this.ngOnInit();
                  });
              });
          } else {
            console.log('det finns');
            this.shoppingsessionService
              .getshopping_sessions()
              .subscribe((result: shopping_session[]) => {
                this.shoppingSessions = result;
                let checkIFContain: any[] = [];
                for (let sessions of this.shoppingSessions) {
                  checkIFContain.push(sessions.shopping_session_id);
                }
                console.log('Check', checkIFContain);
                const sessionNum = checkIFContain[0];

                this.cart_item = {
                  quantity: 1,
                  shopping_session_id: sessionNum,
                  product_id: parseInt(this.product_id),
                };
                if (this.cart_item.product_id)
                  this.cart_itemService
                    .createcart_item(this.cart_item)
                    .subscribe((result: any) => {
                      this.cart_item = result;
                      this.ngOnInit();
                    });
              });
          }
        })
    ) {
    }
  }
}
