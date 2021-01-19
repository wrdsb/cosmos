import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HagarPingComponent } from './hagar-ping.component';

describe('HagarPingComponent', () => {
  let component: HagarPingComponent;
  let fixture: ComponentFixture<HagarPingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HagarPingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HagarPingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
