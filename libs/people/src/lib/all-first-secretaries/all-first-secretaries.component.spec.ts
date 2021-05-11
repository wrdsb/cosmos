import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFirstSecretariesComponent } from './all-first-secretaries.component';

describe('AllFirstSecretariesComponent', () => {
  let component: AllFirstSecretariesComponent;
  let fixture: ComponentFixture<AllFirstSecretariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFirstSecretariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFirstSecretariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
