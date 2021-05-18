import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CalendarSearchComponent } from './calendar-search.component';

describe('CalendarSearchComponent', () => {
  let component: CalendarSearchComponent;
  let fixture: ComponentFixture<CalendarSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
