import { TestBed, waitForAsync } from '@angular/core/testing';
import { TeamviewerModule } from './teamviewer.module';

describe('TeamviewerModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TeamviewerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TeamviewerModule).toBeDefined();
  });
});
