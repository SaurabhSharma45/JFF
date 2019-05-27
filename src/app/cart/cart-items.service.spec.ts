import { TestBed, inject } from '@angular/core/testing';

import { CartItemsService } from './cart-items.service';

describe('CartItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartItemsService]
    });
  });

  it('should be created', inject([CartItemsService], (service: CartItemsService) => {
    expect(service).toBeTruthy();
  }));
});
