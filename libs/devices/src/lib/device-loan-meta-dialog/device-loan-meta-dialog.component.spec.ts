import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeviceLoanMetaDialogComponent } from './device-loan-meta-dialog.component';

describe('DeviceLoanMetaDialogComponent', () => {
  let component: DeviceLoanMetaDialogComponent;
  let fixture: ComponentFixture<DeviceLoanMetaDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceLoanMetaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceLoanMetaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
