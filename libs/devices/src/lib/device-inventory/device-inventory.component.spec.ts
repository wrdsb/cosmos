import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceInventoryComponent } from './device-inventory.component';

describe('DeviceInventoryComponent', () => {
  let component: DeviceInventoryComponent;
  let fixture: ComponentFixture<DeviceInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
