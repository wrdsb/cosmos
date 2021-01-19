import { TestBed, waitForAsync } from '@angular/core/testing';
import { IgorConsolePrivateModule } from './igor-console-private.module';

describe('IgorConsolePrivateModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IgorConsolePrivateModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(IgorConsolePrivateModule).toBeDefined();
  });
});
