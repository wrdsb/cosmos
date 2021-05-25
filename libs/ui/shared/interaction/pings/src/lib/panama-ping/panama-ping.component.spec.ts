import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanamaPingComponent } from './panama-ping.component';

describe('PanamaPingComponent', () => {
  let component: PanamaPingComponent;
  let fixture: ComponentFixture<PanamaPingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanamaPingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanamaPingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
