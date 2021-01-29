import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlendersonPingComponent } from './flenderson-ping.component';

describe('FlendersonPingComponent', () => {
  let component: FlendersonPingComponent;
  let fixture: ComponentFixture<FlendersonPingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlendersonPingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlendersonPingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
