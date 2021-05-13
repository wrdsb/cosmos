import { TestBed } from '@angular/core/testing';

import { IGORService } from './igor.service';

describe('IGORService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IGORService = TestBed.get(IGORService);
    expect(service).toBeTruthy();
  });
});
