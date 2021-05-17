import { TestBed } from '@angular/core/testing';

import { IppsJobsService } from './ipps-jobs.service';

describe('IppsJobsService', () => {
  let service: IppsJobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IppsJobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
