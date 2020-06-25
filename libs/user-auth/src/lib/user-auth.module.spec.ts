import { async, TestBed } from '@angular/core/testing';
import { UserAuthModule } from './user-auth.module';

describe('UserAuthModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UserAuthModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UserAuthModule).toBeDefined();
  });
});
