import { TestBed } from '@angular/core/testing';

import { SortingHatPeopleSetDefinitionsService } from './sorting-hat-people-set-definitions.service';

describe('SortingHatPeopleSetDefinitionsService', () => {
  let service: SortingHatPeopleSetDefinitionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortingHatPeopleSetDefinitionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
