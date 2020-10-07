import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarHomeComponent } from './calendar-home.component';

describe('CalendarHomeComponent', () => {
  let component: CalendarHomeComponent;
  let fixture: ComponentFixture<CalendarHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
