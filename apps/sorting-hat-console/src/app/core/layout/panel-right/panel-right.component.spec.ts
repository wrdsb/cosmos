import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelRightComponent } from './panel-right.component';

describe('PanelRightComponent', () => {
  let component: PanelRightComponent;
  let fixture: ComponentFixture<PanelRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
