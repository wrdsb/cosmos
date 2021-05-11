import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementarySchoolAdminComponent } from './elementary-school-admin.component';

describe('ElementarySchoolAdminComponent', () => {
  let component: ElementarySchoolAdminComponent;
  let fixture: ComponentFixture<ElementarySchoolAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementarySchoolAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementarySchoolAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
