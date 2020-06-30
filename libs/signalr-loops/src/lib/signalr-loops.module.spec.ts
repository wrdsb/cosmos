import { async, TestBed } from '@angular/core/testing';
import { SignalrLoopsModule } from './signalr-loops.module';

describe('SignalrLoopsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SignalrLoopsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SignalrLoopsModule).toBeDefined();
  });
});
