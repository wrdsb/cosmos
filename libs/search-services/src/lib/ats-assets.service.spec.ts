import { TestBed } from '@angular/core/testing';

import { ATSAssetsService } from './ats-assets.service';

describe('ATSAssetsService', () => {
  let service: ATSAssetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ATSAssetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
