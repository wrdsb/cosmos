import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinnerPingComponent } from './skinner-ping.component';

describe('SkinnerPingComponent', () => {
  let component: SkinnerPingComponent;
  let fixture: ComponentFixture<SkinnerPingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkinnerPingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinnerPingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
