import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodexPeopleHomeComponent } from './home.component';

describe('CodexPeopleHomeComponent', () => {
  let component: CodexPeopleHomeComponent;
  let fixture: ComponentFixture<CodexPeopleHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodexPeopleHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodexPeopleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
