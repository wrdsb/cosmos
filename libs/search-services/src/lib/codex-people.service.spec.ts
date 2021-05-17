import { TestBed } from '@angular/core/testing';

import { CodexPeopleService } from './codex-people.service';

describe('CodexPeopleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CodexPeopleService = TestBed.get(CodexPeopleService);
    expect(service).toBeTruthy();
  });
});
