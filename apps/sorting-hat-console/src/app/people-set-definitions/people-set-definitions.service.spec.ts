import { TestBed } from '@angular/core/testing';

import { PeopleSetDefinitionsService } from './people-set-definitions.service';

describe('PeopleSetDefinitionsService', () => {
  let service: PeopleSetDefinitionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleSetDefinitionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
