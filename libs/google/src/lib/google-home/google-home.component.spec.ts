import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleHomeComponent } from './google-home.component';

describe('GoogleHomeComponent', () => {
  let component: GoogleHomeComponent;
  let fixture: ComponentFixture<GoogleHomeComponent>;

  beforeEach(async(() => {
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
