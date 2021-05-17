import { TestBed } from '@angular/core/testing';

import { TrilliumClassesService } from './trillium-classes.service';

describe('TrilliumClassesService', () => {
  let service: TrilliumClassesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrilliumClassesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
