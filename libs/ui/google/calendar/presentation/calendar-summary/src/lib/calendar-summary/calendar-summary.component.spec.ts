import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarSummaryComponent } from './calendar-summary.component';

describe('CalendarSummaryComponent', () => {
  let component: CalendarSummaryComponent;
  let fixture: ComponentFixture<CalendarSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
