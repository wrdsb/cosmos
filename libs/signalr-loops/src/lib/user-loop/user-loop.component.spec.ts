import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserLoopComponent } from './user-loop.component';

describe('UserLoopComponent', () => {
  let component: UserLoopComponent;
  let fixture: ComponentFixture<UserLoopComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLoopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
