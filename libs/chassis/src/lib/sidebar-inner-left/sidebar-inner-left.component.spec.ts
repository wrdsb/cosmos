import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarInnerLeftComponent } from './sidebar-inner-left.component';

describe('SidebarInnerLeftComponent', () => {
  let component: SidebarInnerLeftComponent;
  let fixture: ComponentFixture<SidebarInnerLeftComponent>;

  beforeEach(async(() => {
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
