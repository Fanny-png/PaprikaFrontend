import { TestBed } from '@angular/core/testing';

import { Product_categoryService } from './product-category.service';

describe('ProductCategoryService', () => {
  let service: Product_categoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Product_categoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
