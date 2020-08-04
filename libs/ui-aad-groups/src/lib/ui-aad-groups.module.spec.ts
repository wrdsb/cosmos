import { async, TestBed } from '@angular/core/testing';
import { UiAadGroupsModule } from './ui-aad-groups.module';

describe('UiAadGroupsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiAadGroupsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiAadGroupsModule).toBeDefined();
  });
});
