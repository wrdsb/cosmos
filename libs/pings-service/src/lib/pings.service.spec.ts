import { TestBed } from '@angular/core/testing';

import { PingsService } from './pings.service';

describe('PingsService', () => {
  let service: PingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
