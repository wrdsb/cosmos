import { async, TestBed } from '@angular/core/testing';
import { TeamviewerModule } from './teamviewer.module';

describe('TeamviewerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TeamviewerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TeamviewerModule).toBeDefined();
  });
});
