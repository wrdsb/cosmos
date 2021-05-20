import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsHomeComponent } from './schools-home.component';

describe('SchoolsHomeComponent', () => {
  let component: SchoolsHomeComponent;
  let fixture: ComponentFixture<SchoolsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
