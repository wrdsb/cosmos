import { TestBed } from '@angular/core/testing';

import { AadGroupsService } from './aad-groups.service';

describe('AadGroupsService', () => {
  let service: AadGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AadGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
