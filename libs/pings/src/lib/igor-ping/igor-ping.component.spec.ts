import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IgorPingComponent } from './igor-ping.component';

describe('IgorPingComponent', () => {
  let component: IgorPingComponent;
  let fixture: ComponentFixture<IgorPingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IgorPingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgorPingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
