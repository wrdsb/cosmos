import { TestBed } from '@angular/core/testing';

import { QuartermasterAssetAssignmentsService } from './quartermaster-asset-assignments.service';

describe('QuartermasterAssetAssignmentsService', () => {
  let service: QuartermasterAssetAssignmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuartermasterAssetAssignmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
