import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class AdminviewService {
  private url = 'Product';
  products: Product[] = [];
  productToView?: Product;
  constructor(private http: HttpClient) {}

  public deleteProduct(product: Product): Observable<Product[]> {
    return this.http.delete<Product[]>(
      `${environment.apiUrl}/product/${product.product_id}`
    );
  }
}
