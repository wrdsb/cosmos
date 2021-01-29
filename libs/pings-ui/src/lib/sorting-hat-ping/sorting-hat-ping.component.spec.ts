import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingHatPingComponent } from './sorting-hat-ping.component';

describe('SortingHatPingComponent', () => {
  let component: SortingHatPingComponent;
  let fixture: ComponentFixture<SortingHatPingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortingHatPingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingHatPingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
