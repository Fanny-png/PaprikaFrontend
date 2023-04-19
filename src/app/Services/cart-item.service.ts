import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { cart_item } from '../Models/cart_item';

@Injectable({
  providedIn: 'root',
})
export class Cart_ItemService {
  private url = 'Cart_item';
  private cart_items: cart_item;
  constructor(private http: HttpClient) {}

  public getcart_items(): Observable<cart_item[]> {
    return this.http.get<cart_item[]>(`${environment.apiUrl}/${this.url}`);
  }
  public updatecart_item(
    cart_item: cart_item | undefined
  ): Observable<cart_item[]> {
    return this.http.put<cart_item[]>(
      `${environment.apiUrl}/${this.url}/${cart_item!.cart_item_id}`,
      cart_item
    );
  }

  public getcart_item(id: number): Observable<cart_item> {
    return this.http.get<cart_item>(`${environment.apiUrl}/${this.url}/${id}`);
  }

  public createcart_item(cart_item: cart_item | undefined): Observable<any[]> {
    return this.http.post<cart_item[]>(
      `${environment.apiUrl}/${this.url}`,
      cart_item
    );
  }

  public deletecart_item(id: number | undefined): Observable<cart_item[]> {
    return this.http.delete<cart_item[]>(
      `${environment.apiUrl}/${this.url}/${id}`
    );
  }
}
