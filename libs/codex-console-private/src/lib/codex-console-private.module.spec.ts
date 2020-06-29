import { async, TestBed } from '@angular/core/testing';
import { CodexConsolePrivateModule } from './codex-console-private.module';

describe('CodexConsolePrivateModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CodexConsolePrivateModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CodexConsolePrivateModule).toBeDefined();
  });
});
