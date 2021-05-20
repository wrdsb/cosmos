import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyMembershipComponent } from './modify-membership.component';

describe('ModifyMembershipComponent', () => {
  let component: ModifyMembershipComponent;
  let fixture: ComponentFixture<ModifyMembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyMembershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
