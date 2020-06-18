import { TestBed } from '@angular/core/testing';

import { AngularAadAuthService } from './angular-aad-auth.service';

describe('AngularAadAuthService', () => {
  let service: AngularAadAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularAadAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
