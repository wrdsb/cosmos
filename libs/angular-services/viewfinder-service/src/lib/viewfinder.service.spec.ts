import { TestBed } from '@angular/core/testing';

import { ViewfinderService } from './viewfinder.service';

describe('ViewfinderService', () => {
  let service: ViewfinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewfinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
