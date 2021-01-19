import { TestBed, waitForAsync } from '@angular/core/testing';
import { SignalrLoopsModule } from './signalr-loops.module';

describe('SignalrLoopsModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SignalrLoopsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SignalrLoopsModule).toBeDefined();
  });
});
