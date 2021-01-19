import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PeopleSetMembershipDetailsComponent } from './people-set-membership-details.component';

describe('PeopleSetMembershipDetailsComponent', () => {
  let component: PeopleSetMembershipDetailsComponent;
  let fixture: ComponentFixture<PeopleSetMembershipDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleSetMembershipDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleSetMembershipDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
