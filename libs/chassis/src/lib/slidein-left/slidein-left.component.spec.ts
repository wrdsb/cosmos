import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideinLeftComponent } from './slidein-left.component';

describe('SlideinLeftComponent', () => {
  let component: SlideinLeftComponent;
  let fixture: ComponentFixture<SlideinLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideinLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideinLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
