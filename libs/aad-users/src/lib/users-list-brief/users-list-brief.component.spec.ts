import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UsersListBriefComponent } from './users-list-brief.component';

describe('UsersListBriefComponent', () => {
  let component: UsersListBriefComponent;
  let fixture: ComponentFixture<UsersListBriefComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersListBriefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
