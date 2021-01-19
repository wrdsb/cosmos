import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PeopleSetMembershipsListComponent } from './people-set-memberships-list.component';

describe('PeopleSetMembershipsListComponent', () => {
  let component: PeopleSetMembershipsListComponent;
  let fixture: ComponentFixture<PeopleSetMembershipsListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleSetMembershipsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleSetMembershipsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
