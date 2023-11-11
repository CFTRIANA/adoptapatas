import { TestBed } from '@angular/core/testing';

import { acessoservice } from './acesso.service';

describe('AcessoService', () => {
  let service: acessoservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(acessoservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
