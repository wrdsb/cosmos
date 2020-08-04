import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AadGroupsAllComponent } from './aad-groups-all.component';

describe('AadGroupsAllComponent', () => {
  let component: AadGroupsAllComponent;
  let fixture: ComponentFixture<AadGroupsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AadGroupsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AadGroupsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
