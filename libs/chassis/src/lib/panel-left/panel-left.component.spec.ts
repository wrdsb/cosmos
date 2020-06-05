import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelLeftComponent } from './panel-left.component';

describe('PanelLeftComponent', () => {
  let component: PanelLeftComponent;
  let fixture: ComponentFixture<PanelLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
