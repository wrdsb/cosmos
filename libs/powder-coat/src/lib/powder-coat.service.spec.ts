import { TestBed } from '@angular/core/testing';

import { PowderCoatService } from './powder-coat.service';

describe('PowderCoatService', () => {
  let service: PowderCoatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PowderCoatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
