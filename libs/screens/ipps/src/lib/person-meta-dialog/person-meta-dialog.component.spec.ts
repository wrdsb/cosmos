import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonMetaDialogComponent } from './person-meta-dialog.component';

describe('PersonMetaDialogComponent', () => {
  let component: PersonMetaDialogComponent;
  let fixture: ComponentFixture<PersonMetaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonMetaDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonMetaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
