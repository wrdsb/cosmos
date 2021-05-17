import { TestBed } from '@angular/core/testing';

import { QuartermasterAssetsService } from './quartermaster-assets.service';

describe('QuartermasterAssetsService', () => {
  let service: QuartermasterAssetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuartermasterAssetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
