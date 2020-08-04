import { async, TestBed } from '@angular/core/testing';
import { AADGroupsModule } from './aad-groups.module';

describe('AADGroupsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AADGroupsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AADGroupsModule).toBeDefined();
  });
});
