import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MembershipsListComponent } from './memberships-list.component';

describe('MembershipsListComponent', () => {
  let component: MembershipsListComponent;
  let fixture: ComponentFixture<MembershipsListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MembershipsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
