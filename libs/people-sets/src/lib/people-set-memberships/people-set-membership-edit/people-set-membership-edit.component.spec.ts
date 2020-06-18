import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleSetMembershipEditComponent } from './people-set-membership-edit.component';

describe('PeopleSetMembershipEditComponent', () => {
  let component: PeopleSetMembershipEditComponent;
  let fixture: ComponentFixture<PeopleSetMembershipEditComponent>;

  beforeEach(async(() => {
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
