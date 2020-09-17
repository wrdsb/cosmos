import { async, TestBed } from '@angular/core/testing';
import { GSuiteModule } from './gsuite.module';

describe('GSuiteModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GSuiteModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GSuiteModule).toBeDefined();
  });
});
