import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleSlideinRightComponent } from './toggle-slidein-right.component';

describe('ToggleSlideinRightComponent', () => {
  let component: ToggleSlideinRightComponent;
  let fixture: ComponentFixture<ToggleSlideinRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleSlideinRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleSlideinRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
