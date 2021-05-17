import { TestBed } from '@angular/core/testing';

import { GoogleGroupsMembershipsActualService } from './google-groups-memberships-actual.service';

describe('GoogleGroupsMembershipsActualService', () => {
  let service: GoogleGroupsMembershipsActualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleGroupsMembershipsActualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
