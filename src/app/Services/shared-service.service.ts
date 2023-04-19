import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private _totalProducts = new BehaviorSubject<number>(0);

  get totalProducts() {
    return this._totalProducts.asObservable();
  }

  updateTotalProducts(totalProducts: number) {
    this._totalProducts.next(totalProducts);
  }

}
