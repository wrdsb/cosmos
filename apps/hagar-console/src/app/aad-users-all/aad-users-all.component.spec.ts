import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AADUsersAllComponent } from './aad-users-all.component';

describe('AADUsersAllComponent', () => {
  let component: AADUsersAllComponent;
  let fixture: ComponentFixture<AADUsersAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AADUsersAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AADUsersAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
