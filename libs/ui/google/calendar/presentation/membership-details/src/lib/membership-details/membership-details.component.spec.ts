import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipDetailsComponent } from './membership-details.component';

describe('MembershipDetailsComponent', () => {
  let component: MembershipDetailsComponent;
  let fixture: ComponentFixture<MembershipDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembershipDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
