import { async, TestBed } from '@angular/core/testing';
import { CodexServiceModule } from './codex-service.module';

describe('CodexServiceModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CodexServiceModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CodexServiceModule).toBeDefined();
  });
});
