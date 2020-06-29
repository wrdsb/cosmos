import { async, TestBed } from '@angular/core/testing';
import { CodexPeopleModule } from './codex-people.module';

describe('CodexPeopleModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CodexPeopleModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CodexPeopleModule).toBeDefined();
  });
});
