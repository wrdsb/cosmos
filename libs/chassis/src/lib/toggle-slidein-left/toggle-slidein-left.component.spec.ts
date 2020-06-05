import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleSlideinLeftComponent } from './toggle-slidein-left.component';

describe('ToggleSlideinLeftComponent', () => {
  let component: ToggleSlideinLeftComponent;
  let fixture: ComponentFixture<ToggleSlideinLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleSlideinLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleSlideinLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
