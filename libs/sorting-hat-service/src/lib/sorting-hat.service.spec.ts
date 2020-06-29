import { TestBed } from '@angular/core/testing';

import { SortingHatService } from './sorting-hat.service';

describe('SortingHatService', () => {
  let service: SortingHatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortingHatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
