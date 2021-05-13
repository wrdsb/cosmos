import { TestBed } from '@angular/core/testing';

import { HoustonService } from './houston.service';

describe('HoustonService', () => {
  let service: HoustonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoustonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
