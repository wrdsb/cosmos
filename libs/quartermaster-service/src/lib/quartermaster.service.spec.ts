import { TestBed } from '@angular/core/testing';

import { QuartermasterService } from './quartermaster.service';

describe('QuartermasterService', () => {
  let service: QuartermasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuartermasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
