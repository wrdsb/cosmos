import { TestBed } from '@angular/core/testing';

import { ChassisService } from './chassis.service';

describe('ChassisService', () => {
  let service: ChassisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChassisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
