import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CodexPeopleDetailComponent } from './detail.component';

describe('CodexPeopleDetailComponent', () => {
  let component: CodexPeopleDetailComponent;
  let fixture: ComponentFixture<CodexPeopleDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CodexPeopleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodexPeopleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
