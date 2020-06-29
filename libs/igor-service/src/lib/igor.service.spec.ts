import { TestBed } from '@angular/core/testing';

import { IgorService } from './igor.service';

describe('IgorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IgorService = TestBed.get(IgorService);
    expect(service).toBeTruthy();
  });
});
