import { async, TestBed } from '@angular/core/testing';
import { CodexModule } from './codex.module';

describe('CodexModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CodexModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CodexModule).toBeDefined();
  });
});
