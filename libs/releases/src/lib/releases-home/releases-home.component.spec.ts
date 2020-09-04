import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasesHomeComponent } from './releases-home.component';

describe('ReleasesHomeComponent', () => {
  let component: ReleasesHomeComponent;
  let fixture: ComponentFixture<ReleasesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleasesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleasesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
