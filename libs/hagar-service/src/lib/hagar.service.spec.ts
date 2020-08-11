import { TestBed } from '@angular/core/testing';

import { HagarService } from './hagar.service';

describe('HagarService', () => {
  let service: HagarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HagarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
