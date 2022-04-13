import { TestBed } from '@angular/core/testing';

import { EncryptoService } from './encrypto.service';

describe('EncryptoService', () => {
  let service: EncryptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncryptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
