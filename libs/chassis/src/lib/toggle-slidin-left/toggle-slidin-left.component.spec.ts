import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleSlidinLeftComponent } from './toggle-slidin-left.component';

describe('ToggleSlidinLeftComponent', () => {
  let component: ToggleSlidinLeftComponent;
  let fixture: ComponentFixture<ToggleSlidinLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleSlidinLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleSlidinLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
