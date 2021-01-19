import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChassisComponent } from './chassis.component';

describe('ChassisComponent', () => {
  let component: ChassisComponent;
  let fixture: ComponentFixture<ChassisComponent>;

  beforeEach(waitForAsync(() => {
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
