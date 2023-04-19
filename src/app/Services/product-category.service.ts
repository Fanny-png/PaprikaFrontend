import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product_category } from '../Models/product_category';

@Injectable({
  providedIn: 'root',
})
export class Product_categoryService {
  private url = 'Product_category';
  private Product_categorys: Product_category[];
  constructor(private http: HttpClient) {}

  public getProduct_categorys(): Observable<Product_category[]> {
    return this.http.get<Product_category[]>(
      `${environment.apiUrl}/${this.url}`
    );
  }
  public updateProduct_category(
    product_category: Product_category | undefined
  ): Observable<Product_category[]> {
    return this.http.put<Product_category[]>(
      `${environment.apiUrl}/${this.url}/${
        product_category!.product_category_id
      }`,
      product_category
    );
  }

  public getProduct_category(id: number): Observable<Product_category> {
    return this.http.get<Product_category>(
      `${environment.apiUrl}/${this.url}/${id}`
    );
  }

  public createProduct_category(
    Product_category: Product_category | undefined
  ): Observable<any[]> {
    return this.http.post<Product_category[]>(
      `${environment.apiUrl}/${this.url}`,
      Product_category
    );
  }

  public deleteProduct_category(
    id: number | undefined
  ): Observable<Product_category[]> {
    return this.http.delete<Product_category[]>(
      `${environment.apiUrl}/${this.url}/${id}`
    );
  }
}
