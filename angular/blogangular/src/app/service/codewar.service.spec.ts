import { TestBed } from '@angular/core/testing';

import { CodewarService } from './codewar.service';

describe('CodewarService', () => {
  let service: CodewarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodewarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
