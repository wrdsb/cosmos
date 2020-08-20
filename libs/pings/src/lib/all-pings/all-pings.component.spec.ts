import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPingsComponent } from './all-pings.component';

describe('AllPingsComponent', () => {
  let component: AllPingsComponent;
  let fixture: ComponentFixture<AllPingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
