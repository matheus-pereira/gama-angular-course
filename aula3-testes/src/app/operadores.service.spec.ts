import { TestBed } from '@angular/core/testing';

import { OperadoresService } from './operadores.service';

describe('OperadoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('ao adicionar 1 + 2 deve ser 3 e menor que 4', () => {
    const service: OperadoresService = TestBed.get(OperadoresService);
    expect(service.add(1, 2)).toBe(3);
    expect(service.add(1, 2)).toBeLessThan(4);
  });
});
