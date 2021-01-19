import { TestBed, waitForAsync } from '@angular/core/testing';
import { GoogleGroupsModule } from './google-groups.module';

describe('GoogleGroupsModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GoogleGroupsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GoogleGroupsModule).toBeDefined();
  });
});
