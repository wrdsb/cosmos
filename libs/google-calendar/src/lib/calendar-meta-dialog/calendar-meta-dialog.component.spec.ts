import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarMetaDialogComponent } from './calendar-meta-dialog.component';

describe('CalendarMetaDialogComponent', () => {
  let component: CalendarMetaDialogComponent;
  let fixture: ComponentFixture<CalendarMetaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarMetaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarMetaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
