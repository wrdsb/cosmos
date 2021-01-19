import { TestBed, waitForAsync } from '@angular/core/testing';
import { TrilliumModule } from './trillium.module';

describe('TrilliumModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TrilliumModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TrilliumModule).toBeDefined();
  });
});
