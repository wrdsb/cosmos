import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleHomeComponent } from './people-home.component';

describe('PeopleHomeComponent', () => {
  let component: PeopleHomeComponent;
  let fixture: ComponentFixture<PeopleHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
