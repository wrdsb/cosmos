import { async, TestBed } from '@angular/core/testing';
import { AadGroupsModule } from './aad-groups.module';

describe('AadGroupsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AadGroupsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AadGroupsModule).toBeDefined();
  });
});
