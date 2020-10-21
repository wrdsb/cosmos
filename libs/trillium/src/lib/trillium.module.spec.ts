import { async, TestBed } from '@angular/core/testing';
import { TrilliumModule } from './trillium.module';

describe('TrilliumModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TrilliumModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TrilliumModule).toBeDefined();
  });
});
