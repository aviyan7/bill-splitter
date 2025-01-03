import { TestBed } from '@angular/core/testing';

import { BillSplitterService } from './bill-splitter.service';

describe('BillSplitterService', () => {
  let service: BillSplitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillSplitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
