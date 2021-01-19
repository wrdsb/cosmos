import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PeopleSetMembershipEditComponent } from './people-set-membership-edit.component';

describe('PeopleSetMembershipEditComponent', () => {
  let component: PeopleSetMembershipEditComponent;
  let fixture: ComponentFixture<PeopleSetMembershipEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleSetMembershipEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleSetMembershipEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
