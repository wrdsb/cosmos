import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SignInOutButtonComponent } from './sign-in-out-button.component';

describe('SignInOutButtonComponent', () => {
  let component: SignInOutButtonComponent;
  let fixture: ComponentFixture<SignInOutButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInOutButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInOutButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
