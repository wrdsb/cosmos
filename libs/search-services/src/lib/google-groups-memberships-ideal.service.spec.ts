import { TestBed } from '@angular/core/testing';

import { GoogleGroupsMembershipsIdealService } from './google-groups-memberships-ideal.service';

describe('GoogleGroupsMembershipsIdealService', () => {
  let service: GoogleGroupsMembershipsIdealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleGroupsMembershipsIdealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
