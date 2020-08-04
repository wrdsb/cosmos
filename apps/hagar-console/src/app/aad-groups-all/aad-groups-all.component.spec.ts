import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AADGroupsAllComponent } from './aad-groups-all.component';

describe('AADGroupsAllComponent', () => {
  let component: AADGroupsAllComponent;
  let fixture: ComponentFixture<AADGroupsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AADGroupsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AADGroupsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
