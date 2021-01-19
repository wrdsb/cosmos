import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BigSignInOutButtonComponent } from './big-sign-in-out-button.component';

describe('BigSignInOutButtonComponent', () => {
  let component: BigSignInOutButtonComponent;
  let fixture: ComponentFixture<BigSignInOutButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BigSignInOutButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigSignInOutButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
