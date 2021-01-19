import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeviceLoansSearchComponent } from './device-loans-search.component';

describe('DeviceLoansSearchComponent', () => {
  let component: DeviceLoansSearchComponent;
  let fixture: ComponentFixture<DeviceLoansSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceLoansSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceLoansSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
