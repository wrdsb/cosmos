import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupMetaDialogComponent } from './group-meta-dialog.component';

describe('GroupMetaDialogComponent', () => {
  let component: GroupMetaDialogComponent;
  let fixture: ComponentFixture<GroupMetaDialogComponent>;

  beforeEach(async(() => {
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
