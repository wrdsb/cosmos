import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeGroupMetaDialogComponent } from './employee-group-meta-dialog.component';

describe('EmployeeGroupMetaDialogComponent', () => {
  let component: EmployeeGroupMetaDialogComponent;
  let fixture: ComponentFixture<EmployeeGroupMetaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeGroupMetaDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeGroupMetaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
