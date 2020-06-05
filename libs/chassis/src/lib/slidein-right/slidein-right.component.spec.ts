import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideinRightComponent } from './slidein-right.component';

describe('SlideinRightComponent', () => {
  let component: SlideinRightComponent;
  let fixture: ComponentFixture<SlideinRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideinRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideinRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
