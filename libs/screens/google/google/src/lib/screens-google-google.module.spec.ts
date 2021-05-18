import { TestBed, waitForAsync } from '@angular/core/testing';
import { ScreensGoogleGoogleModule } from './screens-google-google.module';

describe('ScreensGoogleGoogleModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ScreensGoogleGoogleModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ScreensGoogleGoogleModule).toBeDefined();
  });
});
