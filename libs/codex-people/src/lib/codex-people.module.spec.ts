import { TestBed, waitForAsync } from '@angular/core/testing';
import { CodexPeopleModule } from './codex-people.module';

describe('CodexPeopleModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CodexPeopleModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CodexPeopleModule).toBeDefined();
  });
});
