import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryFirstSecretariesComponent } from './secondary-first-secretaries.component';

describe('SecondaryFirstSecretariesComponent', () => {
  let component: SecondaryFirstSecretariesComponent;
  let fixture: ComponentFixture<SecondaryFirstSecretariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryFirstSecretariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryFirstSecretariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
