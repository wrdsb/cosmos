import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AadHomeComponent } from './home.component';

describe('AadHomeComponent', () => {
  let component: AadHomeComponent;
  let fixture: ComponentFixture<AadHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AadHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AadHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
