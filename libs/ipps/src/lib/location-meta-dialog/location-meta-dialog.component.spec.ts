import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationMetaDialogComponent } from './location-meta-dialog.component';

describe('LocationMetaDialogComponent', () => {
  let component: LocationMetaDialogComponent;
  let fixture: ComponentFixture<LocationMetaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationMetaDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationMetaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
