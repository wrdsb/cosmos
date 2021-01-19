import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReleasesHomeComponent } from './releases-home.component';

describe('ReleasesHomeComponent', () => {
  let component: ReleasesHomeComponent;
  let fixture: ComponentFixture<ReleasesHomeComponent>;

  beforeEach(waitForAsync(() => {
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
