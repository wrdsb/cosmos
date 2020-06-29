import { async, TestBed } from '@angular/core/testing';
import { IgorModule } from './igor.module';

describe('IgorModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IgorModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(IgorModule).toBeDefined();
  });
});
