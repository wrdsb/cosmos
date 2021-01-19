import { TestBed, waitForAsync } from '@angular/core/testing';
import { SchoolsModule } from './schools.module';

describe('SchoolsModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SchoolsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SchoolsModule).toBeDefined();
  });
});
