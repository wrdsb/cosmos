import { TestBed } from '@angular/core/testing';

import { CodexWebsitesService } from './codex-websites.service';

describe('CodexWebsitesService', () => {
  let service: CodexWebsitesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodexWebsitesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
