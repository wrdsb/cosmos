import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeviceLoansHomeComponent } from './device-loans-home.component';

describe('DeviceLoansHomeComponent', () => {
  let component: DeviceLoansHomeComponent;
  let fixture: ComponentFixture<DeviceLoansHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceLoansHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceLoansHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
