import { TestBed } from '@angular/core/testing';

import { IppsService } from './ipps.service';

describe('IppsService', () => {
  let service: IppsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IppsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
