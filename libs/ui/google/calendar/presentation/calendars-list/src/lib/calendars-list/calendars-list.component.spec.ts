import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarsListComponent } from './calendars-list.component';

describe('CalendarsListComponent', () => {
  let component: CalendarsListComponent;
  let fixture: ComponentFixture<CalendarsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
