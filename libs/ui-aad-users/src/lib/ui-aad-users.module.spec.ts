import { async, TestBed } from '@angular/core/testing';
import { UiAadUsersModule } from './ui-aad-users.module';

describe('UiAadUsersModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiAadUsersModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiAadUsersModule).toBeDefined();
  });
});
