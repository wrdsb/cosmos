import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsHomeComponent } from './groups-home.component';

describe('GroupsHomeComponent', () => {
  let component: GroupsHomeComponent;
  let fixture: ComponentFixture<GroupsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
