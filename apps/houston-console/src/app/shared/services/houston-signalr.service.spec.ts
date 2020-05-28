import { TestBed } from '@angular/core/testing';

import { HoustonSignalrService } from './houston-signalr.service';

describe('HoustonSignalrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HoustonSignalrService = TestBed.get(HoustonSignalrService);
    expect(service).toBeTruthy();
  });
});
