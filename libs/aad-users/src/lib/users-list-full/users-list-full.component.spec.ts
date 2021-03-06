import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UsersListFullComponent } from './users-list-full.component';

describe('UsersListFullComponent', () => {
  let component: UsersListFullComponent;
  let fixture: ComponentFixture<UsersListFullComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersListFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
