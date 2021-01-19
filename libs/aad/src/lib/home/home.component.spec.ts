import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AadHomeComponent } from './home.component';

describe('AadHomeComponent', () => {
  let component: AadHomeComponent;
  let fixture: ComponentFixture<AadHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AadHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AadHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
