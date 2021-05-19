import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsSearchComponent } from './locations-search.component';

describe('LocationsSearchComponent', () => {
  let component: LocationsSearchComponent;
  let fixture: ComponentFixture<LocationsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
