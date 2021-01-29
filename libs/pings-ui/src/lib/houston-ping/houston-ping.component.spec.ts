import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoustonPingComponent } from './houston-ping.component';

describe('HoustonPingComponent', () => {
  let component: HoustonPingComponent;
  let fixture: ComponentFixture<HoustonPingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoustonPingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoustonPingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
