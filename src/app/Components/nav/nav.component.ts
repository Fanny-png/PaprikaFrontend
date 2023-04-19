import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product_category } from 'src/app/Models/product_category';
import {
  GoogleApiService,
  UserInfo,
} from 'src/app/Services/google-api.service';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';
import { cart_item } from 'src/app/Models/cart_item';
import { Cart_ItemService } from 'src/app/Services/cart-item.service';
import { SharedService } from 'src/app/Services/shared-service.service';
import { Product_categoryService } from 'src/app/Services/product-category.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  products: Product[] = [];
  cart_items: cart_item[] = [];
  searchTerm: String = '';
  totalProducts: number = 0;

  product_categories: Product_category[] = [];
  product_category: Product_category;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readonly googleApi: GoogleApiService,
    private cart_itemService: Cart_ItemService,
    private productService: ProductService,
    private sharedService: SharedService,
    private product_categoryService: Product_categoryService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['searchTerm']) this.searchTerm = params['searchTerm'];
    });

    this.productService.getProducts().subscribe((result: Product[]) => {
      this.products = result;
    });

    this.cart_itemService.getcart_items().subscribe((result: cart_item[]) => {
      this.cart_items = result;
      this.totalProducts = this.getTotalProducts(this.cart_items);
    });

    this.sharedService.totalProducts.subscribe((totalProducts: number) => {
      this.totalProducts = totalProducts;
    });
    this.product_categoryService
      .getProduct_categorys()
      .subscribe((result: Product_category[]) => {
        this.product_categories = result;
      });
  }

  search(): void {
    if (this.searchTerm)
      this.router.navigateByUrl('/search/' + this.searchTerm);
  }

  isLoggedIn(): boolean {
    return this.googleApi.isLoggedIn();
  }

  getProductById(productId: number) {
    return this.products.find((p) => p.product_id === productId);
  }

  getTotalProducts(cartItems: any[]): number {
    let totalProducts = 0;
    for (let i = 0; i < cartItems.length; i++) {
      const product = this.getProductById(cartItems[i].product_id);
      if (product) {
        totalProducts += 1;
      }
    }
    return totalProducts;
  }
}
