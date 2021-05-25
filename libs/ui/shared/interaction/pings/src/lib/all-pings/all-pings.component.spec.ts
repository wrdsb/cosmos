import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllPingsComponent } from './all-pings.component';

describe('AllPingsComponent', () => {
  let component: AllPingsComponent;
  let fixture: ComponentFixture<AllPingsComponent>;

  beforeEach(waitForAsync(() => {
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
