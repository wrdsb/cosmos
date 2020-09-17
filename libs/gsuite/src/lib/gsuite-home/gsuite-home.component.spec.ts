import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GSuiteHomeComponent } from './gsuite-home.component';

describe('GSuiteHomeComponent', () => {
  let component: GSuiteHomeComponent;
  let fixture: ComponentFixture<GSuiteHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GSuiteHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GSuiteHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
