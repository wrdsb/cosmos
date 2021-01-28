import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuartermasterPingComponent } from './quartermaster-ping.component';

describe('QuartermasterPingComponent', () => {
  let component: QuartermasterPingComponent;
  let fixture: ComponentFixture<QuartermasterPingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartermasterPingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartermasterPingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
