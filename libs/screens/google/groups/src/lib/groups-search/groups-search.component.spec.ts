import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GroupsSearchComponent } from './groups-search.component';

describe('GroupsSearchComponent', () => {
  let component: GroupsSearchComponent;
  let fixture: ComponentFixture<GroupsSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
