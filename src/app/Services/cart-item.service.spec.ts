import { TestBed } from '@angular/core/testing';

import { Cart_ItemService } from './cart-item.service';

describe('CartItemService', () => {
  let service: Cart_ItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cart_ItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
