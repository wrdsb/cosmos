import { TestBed } from '@angular/core/testing';

import { CodexSchoolsService } from './codex-schools.service';

describe('CodexSchoolsService', () => {
  let service: CodexSchoolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodexSchoolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
