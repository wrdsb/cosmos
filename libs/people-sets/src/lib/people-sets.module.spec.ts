import { TestBed, waitForAsync } from '@angular/core/testing';
import { PeopleSetsModule } from './people-sets.module';

describe('PeopleSetsModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PeopleSetsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PeopleSetsModule).toBeDefined();
  });
});
