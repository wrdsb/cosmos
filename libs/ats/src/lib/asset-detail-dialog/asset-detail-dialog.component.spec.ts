import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetDetailDialogComponent } from './asset-detail-dialog.component';

describe('AssetDetailDialogComponent', () => {
  let component: AssetDetailDialogComponent;
  let fixture: ComponentFixture<AssetDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetDetailDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
