import { TestBed } from '@angular/core/testing';

import { GoogleCalendarsService } from './google-calendars.service';

describe('GoogleCalendarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleCalendarsService = TestBed.get(GoogleCalendarsService);
    expect(service).toBeTruthy();
  });
});
