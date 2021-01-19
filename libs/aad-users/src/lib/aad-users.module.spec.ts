import { TestBed, waitForAsync } from '@angular/core/testing';
import { AADUsersModule } from './aad-users.module';

describe('AADUsersModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AADUsersModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AADUsersModule).toBeDefined();
  });
});
