import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HagarPingComponent } from './hagar-ping.component';

describe('HagarPingComponent', () => {
  let component: HagarPingComponent;
  let fixture: ComponentFixture<HagarPingComponent>;

  beforeEach(async(() => {
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
