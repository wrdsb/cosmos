import { TestBed, waitForAsync } from '@angular/core/testing';
import { ScreensIppsModule } from './screens-ipps.module';

describe('ScreensIppsModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ScreensIppsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ScreensIppsModule).toBeDefined();
  });
});
