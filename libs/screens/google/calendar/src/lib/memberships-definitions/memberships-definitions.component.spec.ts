import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipsDefinitionsComponent } from './memberships-definitions.component';

describe('MembershipsDefinitionsComponent', () => {
  let component: MembershipsDefinitionsComponent;
  let fixture: ComponentFixture<MembershipsDefinitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembershipsDefinitionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipsDefinitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
