import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgorPingComponent } from './igor-ping.component';

describe('IgorPingComponent', () => {
  let component: IgorPingComponent;
  let fixture: ComponentFixture<IgorPingComponent>;

  beforeEach(async(() => {
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
