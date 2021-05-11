import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPrincipalsComponent } from './all-principals.component';

describe('AllPrincipalsComponent', () => {
  let component: AllPrincipalsComponent;
  let fixture: ComponentFixture<AllPrincipalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPrincipalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPrincipalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
