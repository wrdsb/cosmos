import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsSearchComponent } from './schools-search.component';

describe('SchoolsSearchComponent', () => {
  let component: SchoolsSearchComponent;
  let fixture: ComponentFixture<SchoolsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolsSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
