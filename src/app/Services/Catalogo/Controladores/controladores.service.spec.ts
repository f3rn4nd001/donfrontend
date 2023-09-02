import { TestBed } from '@angular/core/testing';

import { ControladoresService } from './controladores.service';

describe('ControladoresService', () => {
  let service: ControladoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControladoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
