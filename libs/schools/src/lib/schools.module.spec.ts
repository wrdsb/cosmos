import { async, TestBed } from '@angular/core/testing';
import { SchoolsModule } from './schools.module';

describe('SchoolsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SchoolsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SchoolsModule).toBeDefined();
  });
});
