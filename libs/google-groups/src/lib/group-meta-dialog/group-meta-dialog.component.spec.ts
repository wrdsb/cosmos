import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GroupMetaDialogComponent } from './group-meta-dialog.component';

describe('GroupMetaDialogComponent', () => {
  let component: GroupMetaDialogComponent;
  let fixture: ComponentFixture<GroupMetaDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupMetaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupMetaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
