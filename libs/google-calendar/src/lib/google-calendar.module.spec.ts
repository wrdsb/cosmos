import { TestBed, waitForAsync } from '@angular/core/testing';
import { GoogleCalendarModule } from './google-calendar.module';

describe('GoogleCalendarModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GoogleCalendarModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GoogleCalendarModule).toBeDefined();
  });
});