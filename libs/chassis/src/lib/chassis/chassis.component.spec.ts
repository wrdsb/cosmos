import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChassisComponent } from './chassis.component';

describe('ChassisComponent', () => {
  let component: ChassisComponent;
  let fixture: ComponentFixture<ChassisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChassisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChassisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
