import { TestBed, waitForAsync } from '@angular/core/testing';
import { ScreensGoogleGoogleCalendarModule } from './screens-google-calendar.module';

describe('ScreensGoogleGoogleCalendarModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ScreensGoogleGoogleCalendarModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ScreensGoogleGoogleCalendarModule).toBeDefined();
  });
});
