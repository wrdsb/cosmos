import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SidebarOuterRightComponent } from './sidebar-outer-right.component';

describe('SidebarOuterRightComponent', () => {
  let component: SidebarOuterRightComponent;
  let fixture: ComponentFixture<SidebarOuterRightComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarOuterRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarOuterRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
