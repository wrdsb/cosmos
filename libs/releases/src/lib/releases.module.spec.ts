import { TestBed, waitForAsync } from '@angular/core/testing';
import { ReleasesModule } from './releases.module';

describe('ReleasesModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ReleasesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ReleasesModule).toBeDefined();
  });
});
