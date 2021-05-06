import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobMetaDialogComponent } from './job-meta-dialog.component';

describe('JobMetaDialogComponent', () => {
  let component: JobMetaDialogComponent;
  let fixture: ComponentFixture<JobMetaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobMetaDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobMetaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
