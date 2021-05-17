import { TestBed } from '@angular/core/testing';

import { IppsEmployeeGroupsService } from './ipps-employee-groups.service';

describe('IppsEmployeeGroupsService', () => {
  let service: IppsEmployeeGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IppsEmployeeGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
