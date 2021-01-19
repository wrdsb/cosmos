import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GroupsListBriefComponent } from './groups-list-brief.component';

describe('GroupsListBriefComponent', () => {
  let component: GroupsListBriefComponent;
  let fixture: ComponentFixture<GroupsListBriefComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupsListBriefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsListBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
