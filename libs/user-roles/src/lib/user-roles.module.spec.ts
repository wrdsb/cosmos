import { async, TestBed } from '@angular/core/testing';
import { UserRolesModule } from './user-roles.module';

describe('UserRolesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UserRolesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UserRolesModule).toBeDefined();
  });
});
