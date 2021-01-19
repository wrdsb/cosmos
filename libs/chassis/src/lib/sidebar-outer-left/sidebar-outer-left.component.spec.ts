import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SidebarOuterLeftComponent } from './sidebar-outer-left.component';

describe('SidebarOuterLeftComponent', () => {
  let component: SidebarOuterLeftComponent;
  let fixture: ComponentFixture<SidebarOuterLeftComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarOuterLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarOuterLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
