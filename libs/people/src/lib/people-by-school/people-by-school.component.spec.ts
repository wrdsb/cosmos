import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleBySchoolComponent } from './people-by-school.component';

describe('PeopleBySchoolComponent', () => {
  let component: PeopleBySchoolComponent;
  let fixture: ComponentFixture<PeopleBySchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleBySchoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleBySchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
