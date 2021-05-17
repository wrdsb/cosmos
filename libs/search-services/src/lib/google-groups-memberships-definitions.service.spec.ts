import { TestBed } from '@angular/core/testing';

import { GoogleGroupsMembershipsDefinitionsService } from './google-groups-memberships-definitions.service';

describe('GoogleGroupsMembershipsDefinitionsService', () => {
  let service: GoogleGroupsMembershipsDefinitionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleGroupsMembershipsDefinitionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
