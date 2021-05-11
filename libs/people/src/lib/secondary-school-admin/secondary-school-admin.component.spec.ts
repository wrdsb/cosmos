import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondarySchoolAdminComponent } from './secondary-school-admin.component';

describe('SecondarySchoolAdminComponent', () => {
  let component: SecondarySchoolAdminComponent;
  let fixture: ComponentFixture<SecondarySchoolAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondarySchoolAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondarySchoolAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
