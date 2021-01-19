import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesInventoryComponent } from './devices-inventory.component';

describe('DevicesInventoryComponent', () => {
  let component: DevicesInventoryComponent;
  let fixture: ComponentFixture<DevicesInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicesInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
