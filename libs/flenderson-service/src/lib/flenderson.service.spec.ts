import { TestBed } from '@angular/core/testing';

import { FlendersonService } from './flenderson.service';

describe('FlendersonService', () => {
  let service: FlendersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlendersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
