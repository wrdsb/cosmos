import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipCardComponent } from './membership-card.component';

describe('MembershipCardComponent', () => {
  let component: MembershipCardComponent;
  let fixture: ComponentFixture<MembershipCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembershipCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
