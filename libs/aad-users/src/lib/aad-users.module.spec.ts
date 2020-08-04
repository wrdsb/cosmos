import { async, TestBed } from '@angular/core/testing';
import { AadUsersModule } from './aad-users.module';

describe('AadUsersModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AadUsersModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AadUsersModule).toBeDefined();
  });
});
