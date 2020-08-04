import { TestBed } from '@angular/core/testing';

import { HagarServiceService } from './hagar-service.service';

describe('HagarServiceService', () => {
  let service: HagarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HagarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
