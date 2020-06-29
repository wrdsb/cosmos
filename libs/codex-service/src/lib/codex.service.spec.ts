import { TestBed } from '@angular/core/testing';

import { CodexService } from './codex.service';

describe('CodexService', () => {
  let service: CodexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
