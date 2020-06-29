import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodexPeopleListComponent } from './list.component';

describe('CodexPeopleListComponent', () => {
  let component: CodexPeopleListComponent;
  let fixture: ComponentFixture<CodexPeopleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodexPeopleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodexPeopleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
