import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = 'Product';
  private products: Product[];
  constructor(private http: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/${this.url}`);
  }
  public updateProduct(product: Product | undefined): Observable<Product[]> {
    return this.http.put<Product[]>(
      `${environment.apiUrl}/${this.url}/${product!.product_id}`,
      product
    );
  }

  public getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.apiUrl}/${this.url}/${id}`);
  }

  public createProduct(product: Product | undefined): Observable<any[]> {
    return this.http.post<Product[]>(
      `${environment.apiUrl}/${this.url}`,
      product
    );
  }

  public deleteProduct(id: number | undefined): Observable<Product[]> {
    return this.http.delete<Product[]>(
      `${environment.apiUrl}/${this.url}/${id}`
    );
  }
}
