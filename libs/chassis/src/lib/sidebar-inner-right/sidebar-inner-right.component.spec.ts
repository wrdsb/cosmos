import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SidebarInnerRightComponent } from './sidebar-inner-right.component';

describe('SidebarInnerRightComponent', () => {
  let component: SidebarInnerRightComponent;
  let fixture: ComponentFixture<SidebarInnerRightComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarInnerRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarInnerRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
