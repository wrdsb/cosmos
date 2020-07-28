import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarOuterRightComponent } from './sidebar-outer-right.component';

describe('SidebarOuterRightComponent', () => {
  let component: SidebarOuterRightComponent;
  let fixture: ComponentFixture<SidebarOuterRightComponent>;

  beforeEach(async(() => {
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
