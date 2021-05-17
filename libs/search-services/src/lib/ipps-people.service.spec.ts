import { TestBed } from '@angular/core/testing';

import { IPPSPeopleService } from './ipps-people.service';

describe('IPPSService', () => {
  let service: IPPSPeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IPPSPeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
