import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtsHomeComponent } from './ats-home.component';

describe('AtsHomeComponent', () => {
  let component: AtsHomeComponent;
  let fixture: ComponentFixture<AtsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
