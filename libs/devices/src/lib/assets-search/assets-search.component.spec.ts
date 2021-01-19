import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsSearchComponent } from './assets-search.component';

describe('AssetsSearchComponent', () => {
  let component: AssetsSearchComponent;
  let fixture: ComponentFixture<AssetsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
