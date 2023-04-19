import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cart_item } from 'src/app/Models/cart_item';
import { Discount } from 'src/app/Models/Discount';
import { Product } from 'src/app/Models/Product';
import { shopping_session } from 'src/app/Models/Shopping_session';
import { Cart_ItemService } from 'src/app/Services/cart-item.service';
import { DiscountService } from 'src/app/Services/discount.service';
import { ProductService } from 'src/app/Services/product.service';
import { ShoppingSessionService } from 'src/app/Services/shopping-session.service';
import { SharedService } from 'src/app/Services/shared-service.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  product: Product;
  products: Product[] = [];
  cart_item: cart_item;
  cart_items: cart_item[] = [];
  shoppingSession: shopping_session;
  shoppingSessions: shopping_session[] = [];
  discounts: Discount[] = [];
  discount: Discount;

  counter: number;

  constructor(
    private productService: ProductService,
    private cart_itemService: Cart_ItemService,
    private shopping_sessionService: ShoppingSessionService,
    private discountService: DiscountService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((result: Product[]) => {
      this.products = result;
    });

    this.cart_itemService.getcart_items().subscribe((result: cart_item[]) => {
      this.cart_items = result;
      const totalProducts = this.getTotalProducts(this.cart_items);
      this.sharedService.updateTotalProducts(totalProducts);
    });

    this.shopping_sessionService
      .getshopping_sessions()
      .subscribe((result: shopping_session[]) => {
        this.shoppingSessions = result;
      });

    this.discountService.getDiscounts().subscribe((result: Discount[]) => {
      this.discounts = result;
    });
  }

  showKundinfo = true;
  toggleKundinfo() {
    this.showKundinfo = !this.showKundinfo;
  }

  showFrakt = false;
  toggleFrakt() {
    this.showFrakt = !this.showFrakt;
  }

  showBetal = false;
  toggleBetal() {
    this.showBetal = !this.showBetal;
  }

  resetCartItems() {
    this.cart_itemService.getcart_items().subscribe((result: cart_item[]) => {
      this.cart_items = result;
      for (let cart of this.cart_items) {
        if (cart.cart_item_id) {
          this.cart_itemService
            .deletecart_item(cart.cart_item_id)
            .subscribe((result: any) => {
              this.cart_item = result;
            });
        }
      }
    });

    setTimeout(() => this.resetShoppingSession(), 1000);
  }

  resetShoppingSession() {
    this.shopping_sessionService
      .getshopping_sessions()
      .subscribe((result: shopping_session[]) => {
        this.shoppingSessions = result;
        for (let shopping of this.shoppingSessions) {
          if (shopping.shopping_session_id) {
            this.shopping_sessionService
              .deleteshopping_session(shopping.shopping_session_id)
              .subscribe((result: any) => {
                this.shoppingSession = result;
              });
          }
        }
      });
    this.ngOnInit();
  }

  public deleteCartItem(id: number) {
    this.cart_itemService.deletecart_item(id).subscribe((result: any) => {
      this.cart_item = result;
      console.log(result);
      this.ngOnInit();
    });
  }

  newprice(price: number, discountAmount: number) {
    const percent = discountAmount / 100;
    const reduction = price * percent;
    const newPrice = price - reduction;
    return Math.floor(newPrice);
  }

  getProductById(productId: number) {
    return this.products.find(p => p.product_id === productId);
  }

  getTotalPrice(cartItems: any[]): number {
    let totalPrice = 0;
    for (let i = 0; i < cartItems.length; i++) {
      const product = this.getProductById(cartItems[i].product_id);
      if (product) {
        totalPrice += product.product_price;
      }
    }
    return totalPrice;
  }
  getTotalProducts(cartItems: cart_item[]): number {
    let totalProducts = 0;
    for (let i = 0; i < cartItems.length; i++) {
      totalProducts += 1;
    }
    return totalProducts;
  }
}
