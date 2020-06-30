import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupMembershipDetailComponent } from './group-membership-detail.component';

describe('GroupMembershipDetailComponent', () => {
  let component: GroupMembershipDetailComponent;
  let fixture: ComponentFixture<GroupMembershipDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupMembershipDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupMembershipDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
