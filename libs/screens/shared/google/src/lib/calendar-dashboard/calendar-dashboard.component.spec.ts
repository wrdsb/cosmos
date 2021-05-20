import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarDashboardComponent } from './calendar-dashboard.component';

describe('CalendarDashboardComponent', () => {
  let component: CalendarDashboardComponent;
  let fixture: ComponentFixture<CalendarDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
