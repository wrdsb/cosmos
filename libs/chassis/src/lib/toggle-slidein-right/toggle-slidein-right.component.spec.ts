import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleSidebarInnerRightComponent } from './toggle-slidein-right.component';

describe('ToggleSidebarInnerRightComponent', () => {
  let component: ToggleSidebarInnerRightComponent;
  let fixture: ComponentFixture<ToggleSidebarInnerRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleSidebarInnerRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleSidebarInnerRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
