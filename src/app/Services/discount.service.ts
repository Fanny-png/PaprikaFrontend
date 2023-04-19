import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Discount } from '../Models/Discount';

@Injectable({
  providedIn: 'root',
})
export class DiscountService {
  private url = 'Discount';
  private discounts: Discount[];

  constructor(private http: HttpClient) {}

  public getDiscounts(): Observable<Discount[]> {
    return this.http.get<Discount[]>(`${environment.apiUrl}/${this.url}`);
  }
  public updateDiscount(discount: Discount): Observable<Discount[]> {
    return this.http.put<Discount[]>(
      `${environment.apiUrl}/${this.url}/${discount.discount_id}`,
      discount
    );
  }

  public getDiscount(id: number): Observable<Discount> {
    return this.http.get<Discount>(`${environment.apiUrl}/${this.url}/${id}`);
  }

  public createDiscount(discount: Discount | undefined): Observable<any[]> {
    return this.http.post<Discount[]>(
      `${environment.apiUrl}/${this.url}`,
      discount
    );
  }
  public deleteDiscount(id: number): Observable<Discount[]> {
    return this.http.delete<Discount[]>(
      `${environment.apiUrl}/${this.url}/${id}`
    );
  }
}
