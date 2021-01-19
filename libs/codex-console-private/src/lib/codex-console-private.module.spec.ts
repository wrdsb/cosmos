import { TestBed, waitForAsync } from '@angular/core/testing';
import { CodexConsolePrivateModule } from './codex-console-private.module';

describe('CodexConsolePrivateModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CodexConsolePrivateModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CodexConsolePrivateModule).toBeDefined();
  });
});
