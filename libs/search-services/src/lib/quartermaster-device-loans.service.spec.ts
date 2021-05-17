import { TestBed } from '@angular/core/testing';

import { QuartermasterDeviceLoansService } from './quartermaster-device-loans.service';

describe('QuartermasterDeviceLoansService', () => {
  let service: QuartermasterDeviceLoansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuartermasterDeviceLoansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
