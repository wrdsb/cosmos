import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoopComponent } from './user-loop.component';

describe('UserLoopComponent', () => {
  let component: UserLoopComponent;
  let fixture: ComponentFixture<UserLoopComponent>;

  beforeEach(async(() => {
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
