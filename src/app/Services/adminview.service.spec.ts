import { TestBed } from '@angular/core/testing';

import { AdminviewService } from './adminview.service';

describe('AdminviewService', () => {
  let service: AdminviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
