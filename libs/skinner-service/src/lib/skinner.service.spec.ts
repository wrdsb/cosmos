import { TestBed } from '@angular/core/testing';

import { SkinnerService } from './skinner.service';

describe('SkinnerService', () => {
  let service: SkinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
