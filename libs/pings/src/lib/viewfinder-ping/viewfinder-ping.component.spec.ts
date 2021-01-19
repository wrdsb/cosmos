import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewfinderPingComponent } from './viewfinder-ping.component';

describe('ViewfinderPingComponent', () => {
  let component: ViewfinderPingComponent;
  let fixture: ComponentFixture<ViewfinderPingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewfinderPingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfinderPingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
