import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifictaionsPanelComponent } from './notifictaions-panel.component';

describe('NotifictaionsPanelComponent', () => {
  let component: NotifictaionsPanelComponent;
  let fixture: ComponentFixture<NotifictaionsPanelComponent>;

  beforeEach(async(() => {
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
