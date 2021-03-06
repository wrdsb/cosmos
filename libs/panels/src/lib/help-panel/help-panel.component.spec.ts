import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HelpPanelComponent } from './help-panel.component';

describe('HelpPanelComponent', () => {
  let component: HelpPanelComponent;
  let fixture: ComponentFixture<HelpPanelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
