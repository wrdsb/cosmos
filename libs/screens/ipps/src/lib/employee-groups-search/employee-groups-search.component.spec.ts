import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeGroupsSearchComponent } from './employee-groups-search.component';

describe('EmployeeGroupsSearchComponent', () => {
  let component: EmployeeGroupsSearchComponent;
  let fixture: ComponentFixture<EmployeeGroupsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeGroupsSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeGroupsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
