import { TestBed, waitForAsync } from '@angular/core/testing';
import { GroupsModule } from './groups.module';

describe('GroupsModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GroupsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GroupsModule).toBeDefined();
  });
});
