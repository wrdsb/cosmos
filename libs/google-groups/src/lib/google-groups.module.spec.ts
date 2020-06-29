import { async, TestBed } from '@angular/core/testing';
import { GoogleGroupsModule } from './google-groups.module';

describe('GoogleGroupsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GoogleGroupsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GoogleGroupsModule).toBeDefined();
  });
});
