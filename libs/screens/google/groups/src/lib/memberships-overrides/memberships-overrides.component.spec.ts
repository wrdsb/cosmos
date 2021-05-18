import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipsOverridesComponent } from './memberships-overrides.component';

describe('MembershipsOverridesComponent', () => {
  let component: MembershipsOverridesComponent;
  let fixture: ComponentFixture<MembershipsOverridesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembershipsOverridesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipsOverridesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
