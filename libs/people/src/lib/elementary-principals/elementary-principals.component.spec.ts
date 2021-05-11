import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementaryPrincipalsComponent } from './elementary-principals.component';

describe('ElementaryPrincipalsComponent', () => {
  let component: ElementaryPrincipalsComponent;
  let fixture: ComponentFixture<ElementaryPrincipalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementaryPrincipalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementaryPrincipalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
