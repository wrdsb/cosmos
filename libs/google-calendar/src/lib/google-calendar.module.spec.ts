import { async, TestBed } from '@angular/core/testing';
import { GoogleCalendarModule } from './google-calendar.module';

describe('GoogleCalendarModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GoogleCalendarModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GoogleCalendarModule).toBeDefined();
  });
});
