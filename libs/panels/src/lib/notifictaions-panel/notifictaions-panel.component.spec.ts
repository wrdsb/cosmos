import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NotifictaionsPanelComponent } from './notifictaions-panel.component';

describe('NotifictaionsPanelComponent', () => {
  let component: NotifictaionsPanelComponent;
  let fixture: ComponentFixture<NotifictaionsPanelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifictaionsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifictaionsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
