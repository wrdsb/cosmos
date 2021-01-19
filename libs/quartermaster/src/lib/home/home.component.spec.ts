import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartermasterHomeComponent } from './home.component';

describe('QuartermasterHomeComponent', () => {
  let component: QuartermasterHomeComponent;
  let fixture: ComponentFixture<QuartermasterHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuartermasterHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartermasterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
