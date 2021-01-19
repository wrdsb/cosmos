import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GoogleHomeComponent } from './google-home.component';

describe('GoogleHomeComponent', () => {
  let component: GoogleHomeComponent;
  let fixture: ComponentFixture<GoogleHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
