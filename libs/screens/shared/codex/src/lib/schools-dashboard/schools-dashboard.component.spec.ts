import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsDashboardComponent } from './schools-dashboard.component';

describe('SchoolsDashboardComponent', () => {
  let component: SchoolsDashboardComponent;
  let fixture: ComponentFixture<SchoolsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
