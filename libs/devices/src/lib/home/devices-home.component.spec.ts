import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DevicesHomeComponent } from './devices-home.component';

describe('DevicesHomeComponent', () => {
  let component: DevicesHomeComponent;
  let fixture: ComponentFixture<DevicesHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
