import { async, TestBed } from '@angular/core/testing';
import { IgorConsolePrivateModule } from './igor-console-private.module';

describe('IgorConsolePrivateModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IgorConsolePrivateModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(IgorConsolePrivateModule).toBeDefined();
  });
});
