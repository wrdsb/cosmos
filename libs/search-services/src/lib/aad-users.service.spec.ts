import { TestBed } from '@angular/core/testing';

import { AadUsersService } from './aad-users.service';

describe('AadUsersService', () => {
  let service: AadUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AadUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
