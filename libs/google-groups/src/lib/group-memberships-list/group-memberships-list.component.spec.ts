import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupMembershipsListComponent } from './group-memberships-list.component';

describe('GroupMembershipsListComponent', () => {
  let component: GroupMembershipsListComponent;
  let fixture: ComponentFixture<GroupMembershipsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupMembershipsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupMembershipsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
