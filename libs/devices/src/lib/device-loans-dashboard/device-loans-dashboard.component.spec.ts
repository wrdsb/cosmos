import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeviceLoansDashboardComponent } from './device-loans-dashboard.component';

describe('DeviceLoansDashboardComponent', () => {
  let component: DeviceLoansDashboardComponent;
  let fixture: ComponentFixture<DeviceLoansDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceLoansDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceLoansDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
