import { TestBed, waitForAsync } from '@angular/core/testing';
import { AADGroupsModule } from './aad-groups.module';

describe('AADGroupsModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AADGroupsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AADGroupsModule).toBeDefined();
  });
});
