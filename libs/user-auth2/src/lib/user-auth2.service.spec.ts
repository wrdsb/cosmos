import { TestBed } from '@angular/core/testing';

import { UserAuth2Service } from './user-auth2.service';

describe('UserAuth2Service', () => {
  let service: UserAuth2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAuth2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
