import { async, TestBed } from '@angular/core/testing';
import { ReleasesModule } from './releases.module';

describe('ReleasesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReleasesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ReleasesModule).toBeDefined();
  });
});
