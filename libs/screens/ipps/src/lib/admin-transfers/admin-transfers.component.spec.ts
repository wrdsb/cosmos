import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTransfersComponent } from './admin-transfers.component';

describe('AdminTransfersComponent', () => {
  let component: AdminTransfersComponent;
  let fixture: ComponentFixture<AdminTransfersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTransfersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
