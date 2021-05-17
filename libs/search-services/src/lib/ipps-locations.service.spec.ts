import { TestBed } from '@angular/core/testing';

import { IppsLocationsService } from './ipps-locations.service';

describe('IppsLocationsService', () => {
  let service: IppsLocationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IppsLocationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
