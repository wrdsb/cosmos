import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATSHomeComponent } from './home.component';

describe('ATSHomeComponent', () => {
  let component: ATSHomeComponent;
  let fixture: ComponentFixture<ATSHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATSHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ATSHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
