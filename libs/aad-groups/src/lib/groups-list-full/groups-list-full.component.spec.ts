import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GroupsListFullComponent } from './groups-list-full.component';

describe('GroupsListFullComponent', () => {
  let component: GroupsListFullComponent;
  let fixture: ComponentFixture<GroupsListFullComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupsListFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsListFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
