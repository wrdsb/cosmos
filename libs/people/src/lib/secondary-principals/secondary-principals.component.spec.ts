import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryPrincipalsComponent } from './secondary-principals.component';

describe('SecondaryPrincipalsComponent', () => {
  let component: SecondaryPrincipalsComponent;
  let fixture: ComponentFixture<SecondaryPrincipalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryPrincipalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryPrincipalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
