import { TestBed, waitForAsync } from '@angular/core/testing';
import { UserAuthModule } from './user-auth.module';

describe('UserAuthModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [UserAuthModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UserAuthModule).toBeDefined();
  });
});
