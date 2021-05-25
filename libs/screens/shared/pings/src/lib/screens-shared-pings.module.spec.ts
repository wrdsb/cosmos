import { TestBed, waitForAsync } from '@angular/core/testing';
import { ScreensSharedPingsModule } from './screens-shared-pings.module';

describe('ScreensSharedPingsModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ScreensSharedPingsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ScreensSharedPingsModule).toBeDefined();
  });
});
