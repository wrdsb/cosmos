import { async, TestBed } from '@angular/core/testing';
import { AADUsersModule } from './aad-users.module';

describe('AADUsersModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AADUsersModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AADUsersModule).toBeDefined();
  });
});
