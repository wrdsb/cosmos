import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SidebarInnerLeftComponent } from './sidebar-inner-left.component';

describe('SidebarInnerLeftComponent', () => {
  let component: SidebarInnerLeftComponent;
  let fixture: ComponentFixture<SidebarInnerLeftComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarInnerLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarInnerLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
