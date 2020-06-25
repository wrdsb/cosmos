import { async, TestBed } from '@angular/core/testing';
import { UserProfilesModule } from './user-profiles.module';

describe('UserProfilesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UserProfilesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UserProfilesModule).toBeDefined();
  });
});
