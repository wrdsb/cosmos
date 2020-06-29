import { TestBed } from '@angular/core/testing';

import { GoogleGroupsService } from './google-groups.service';

describe('GoogleGroupsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleGroupsService = TestBed.get(GoogleGroupsService);
    expect(service).toBeTruthy();
  });
});
