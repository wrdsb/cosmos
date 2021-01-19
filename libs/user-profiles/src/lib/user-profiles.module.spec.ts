import { TestBed, waitForAsync } from '@angular/core/testing';
import { UserProfilesModule } from './user-profiles.module';

describe('UserProfilesModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [UserProfilesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UserProfilesModule).toBeDefined();
  });
});
