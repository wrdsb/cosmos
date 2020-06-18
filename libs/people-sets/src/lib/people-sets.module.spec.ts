import { async, TestBed } from '@angular/core/testing';
import { PeopleSetsModule } from './people-sets.module';

describe('PeopleSetsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PeopleSetsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PeopleSetsModule).toBeDefined();
  });
});
