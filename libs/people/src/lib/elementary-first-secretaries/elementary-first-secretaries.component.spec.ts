import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementaryFirstSecretariesComponent } from './elementary-first-secretaries.component';

describe('ElementaryFirstSecretariesComponent', () => {
  let component: ElementaryFirstSecretariesComponent;
  let fixture: ComponentFixture<ElementaryFirstSecretariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementaryFirstSecretariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementaryFirstSecretariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
