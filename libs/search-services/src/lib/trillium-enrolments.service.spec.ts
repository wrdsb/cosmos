import { TestBed } from '@angular/core/testing';

import { TrilliumEnrolmentsService } from './trillium-enrolments.service';

describe('TrilliumEnrolmentsService', () => {
  let service: TrilliumEnrolmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrilliumEnrolmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
