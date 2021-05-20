import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyCalendarComponent } from './modify-calendar.component';

describe('ModifyCalendarComponent', () => {
  let component: ModifyCalendarComponent;
  let fixture: ComponentFixture<ModifyCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
