import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleSlidinRightComponent } from './toggle-slidin-right.component';

describe('ToggleSlidinRightComponent', () => {
  let component: ToggleSlidinRightComponent;
  let fixture: ComponentFixture<ToggleSlidinRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleSlidinRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleSlidinRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
