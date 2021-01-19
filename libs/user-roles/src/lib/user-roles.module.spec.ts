import { TestBed, waitForAsync } from '@angular/core/testing';
import { UserRolesModule } from './user-roles.module';

describe('UserRolesModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [UserRolesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UserRolesModule).toBeDefined();
  });
});
