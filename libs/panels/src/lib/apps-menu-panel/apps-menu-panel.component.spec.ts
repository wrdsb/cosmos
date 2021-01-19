import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppsMenuPanelComponent } from './apps-menu-panel.component';

describe('AppsMenuPanelComponent', () => {
  let component: AppsMenuPanelComponent;
  let fixture: ComponentFixture<AppsMenuPanelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsMenuPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsMenuPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
