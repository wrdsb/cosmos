import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AadUsersAllComponent } from './aad-users-all.component';

describe('AadUsersAllComponent', () => {
  let component: AadUsersAllComponent;
  let fixture: ComponentFixture<AadUsersAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AadUsersAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AadUsersAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
