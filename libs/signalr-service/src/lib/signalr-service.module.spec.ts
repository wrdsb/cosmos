import { async, TestBed } from '@angular/core/testing';
import { SignalrServiceModule } from './signalr-service.module';

describe('SignalrServiceModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SignalrServiceModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SignalrServiceModule).toBeDefined();
  });
});
