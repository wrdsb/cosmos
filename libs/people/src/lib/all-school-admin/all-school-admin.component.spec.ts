import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSchoolAdminComponent } from './all-school-admin.component';

describe('AllSchoolAdminComponent', () => {
  let component: AllSchoolAdminComponent;
  let fixture: ComponentFixture<AllSchoolAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSchoolAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSchoolAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
